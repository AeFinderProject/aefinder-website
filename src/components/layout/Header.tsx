import { DownOutlined, UpOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';

import PrimaryLink from '@/components/links/PrimaryLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import { useAppSelector } from '@/store/hooks';

export default function Header() {
  const router = useRouter();
  const [isShowBox, setIsShowBox] = useState(false);
  const { pathname } = router;
  const username = useAppSelector((state) => state.common.username);

  const handleLogout = useCallback(() => {
    router.push('/login');
  }, [router]);

  const handleLinkToHome = useCallback(() => {
    router.replace('/');
    setTimeout(() => {
      router.reload();
    }, 100);
  }, [router]);

  return (
    <header className='border-gray-E0 flex h-[72px] w-full items-center justify-between border-b px-[40px] py-[24px]'>
      <Image
        src='/assets/svg/aefinder-logo.svg'
        alt='logo'
        width={150}
        height={30}
        onClick={handleLinkToHome}
        className='cursor-pointer'
      />
      {pathname !== '/login' && pathname !== '/' && (
        <div>
          <PrimaryLink href='/dashboard'>My Dashboard</PrimaryLink>
          <UnstyledLink href='https://docs.aefinder.io' className='mx-[40px]'>
            Docs
          </UnstyledLink>
          <div
            className='border-gray-E0 relative inline-block min-h-10 cursor-pointer rounded border pl-[20px] pr-[30px] text-center leading-[40px]'
            onClick={() => setIsShowBox(!isShowBox)}
          >
            <Image
              src='/assets/svg/user.svg'
              alt='user'
              width={18}
              height={18}
              className='mr-2 inline-block'
            />
            {username}
            {isShowBox ? (
              <UpOutlined className='text-gray-80 absolute right-[6px] top-[13px]' />
            ) : (
              <DownOutlined className='text-gray-80 absolute right-[6px] top-[13px]' />
            )}
            {isShowBox && (
              <div className='h-13 border-gray-E0 absolute left-0 top-[52px] w-full rounded border bg-white p-1 text-center'>
                <UpOutlined className='border-b-none text-gray-E0 absolute left-[68px] top-[-10px] bg-white text-xs' />
                <div
                  className='hover:bg-gray-F5 border-none text-center'
                  onClick={() => handleLogout()}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
