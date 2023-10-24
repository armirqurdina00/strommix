#!/bin/bash

originalDirectory="$(realpath "$(dirname "$0")")"

# arg1: path to subproject
# arg2: number of permissible linting errors
# arg3: number of permissible linting warning
check_subproject()
{
	echo "Checking: $1"

	# Go to the subproject.
	cd "$originalDirectory"
	cd "$1"

	# Gather the linter's output.
	lintingOutput=$(npm run lint)
	echo "$lintingOutput"
	lintingOutputLength=$(wc -l <<< "$lintingOutput")

	# If this is true, there are no linting problems at all.
	if (( "$lintingOutputLength" < 4 ))
	then
		echo "$1" passed perfectly.
		return 0
	fi

	lintingOutputTail=$(tail -2 <<< "$lintingOutput")

	# Make sure that there are no automatically fixable linting problems
	automaticallyFixableProblemsExist=$(grep 'potentially fixable with the `--fix` option.' <<< "$lintingOutputTail" | wc -l)
	if (( "$automaticallyFixableProblemsExist" > 0 ))
	then
		>&2 echo "There are automatically fixable linting problems in: $1"
		exit 1
	fi

	# Make sure that there only are few linting errors.
	# Use singular to support the case of only one error.
	numberOfErrors=$(grep -oE '[0-9]+ error' <<< "$lintingOutputTail" | grep -oE '[0-9]+')
	if (( "$numberOfErrors" > $2 ))
	then
		>&2 echo "Too many linting errors in: $1"
		exit 2
	fi

	# Make sure that there only are few linting warnings.
	# Use singular to support the case of only one warning.
	numberOfWarnings=$(grep -oE '[0-9]+ warning' <<< "$lintingOutputTail" | grep -oE '[0-9]+')
	if (( "$numberOfWarnings" > $3 ))
	then
		>&2 echo "Too many linting warnings in: $1"
		exit 3
	fi

	echo "$1" passed.
}

check_subproject . 0 12 &
pid0=$!

wait "$pid0"
exitCode=$?
if (( "$exitCode" > 0 ))
then
	exit "$exitCode"
fi
