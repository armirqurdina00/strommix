import BottomNavBar from '@/components/BottomNavBar';

interface Props {
  title?: string
  children: React.ReactNode
  backgroundColor?: string;
}

export default function Page({children, backgroundColor}: Props) {
  return (
    <>
      {/* <TopNav /> */}
      <main
        className='mx-auto pb-28 px-safe'
        style={{
          height: '100dvh',
          paddingBottom: '56px',
          backgroundColor: backgroundColor,
        }}
      >
        {children}
      </main>
      <BottomNavBar />
    </>
  );
}
