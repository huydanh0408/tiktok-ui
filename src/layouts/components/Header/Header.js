import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import DownloadApp from '~/components/DownloadApp';
import {
    MoonIcon,
    DeviceIcon,
    TiktokLaptopIcon,
    EllipsisIcon,
    BookmarkIcon,
    MessageIcon,
    KeyboardIcon,
    LanguageIcon,
    LiveBulbIcon,
    LiveIcon,
    LogoutIcon,
    PaperPlaneIcon,
    QuestionIcon,
    SettingIcon,
    TiktokCoinIcon,
    UserIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';

const cx = classNames.bind(styles);

const userCurrent = true;
// const userCurrent = false;

const MENU_ITEMS = [
    {
        icon: <LiveBulbIcon />,
        title: 'LIVE Creator Hub',
        href: 'https://www.tiktok.com/live/creators/vi-VN/?enter_from=more&lang=en&region=VN',
    },
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <QuestionIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <MoonIcon />,
        title: 'Dark mode',
        button: (
            <Switch
                checked={false}
                checkedIcon
                uncheckedIcon
                height={24}
                width={44}
                offColor="#ddd"
                onChange={() => {}}
            />
        ),
    },
];

const USER_MENU_ITEMS = [
    {
        icon: <UserIcon />,
        title: 'View Profile',
        to: '/@huydanh.12',
    },
    {
        icon: <BookmarkIcon />,
        title: 'Favorites',
        to: '/@huydanh.12',
    },
    {
        icon: <TiktokCoinIcon />,
        title: 'Get Coins',
        to: '/coin',
    },
    {
        icon: <SettingIcon />,
        title: 'Settings',
        to: '/setting',
    },
    {
        icon: <LiveIcon />,
        title: 'LIVE Studio',
        to: '/live',
    },

    ...MENU_ITEMS,
    {
        icon: <LogoutIcon />,
        title: 'Log out',
        separate: true,
    },
];

const DOWNLOAD_APP_DATA = {
    image: <TiktokLaptopIcon />,
    title: 'TikTok desktop app',
    subTitle:
        'We maintain the same content and product safety standards across TikTok web and desktop app.',
};

// Handle Logic
const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
        case 'language':
            // Handle change language
            console.log(menuItem);
            break;

        default:
            break;
    }
};

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('action')}>
                    <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} light>
                        Upload
                    </Button>

                    {/* <Button primary>Log in</Button> */}
                    {userCurrent || <Button primary>Log in</Button>}

                    <DownloadApp data={DOWNLOAD_APP_DATA}>
                        <button className={cx('download-btn')}>
                            <DeviceIcon />
                        </button>
                    </DownloadApp>

                    {userCurrent && (
                        <>
                            <Tippy
                                content="Messages"
                                delay={[0, 200]}
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    {<PaperPlaneIcon />}
                                </button>
                            </Tippy>
                            <Tippy
                                content="Inbox"
                                delay={[0, 200]}
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                        </>
                    )}

                    <Menu
                        items={userCurrent ? USER_MENU_ITEMS : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {userCurrent ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/414443011_1562387517934748_5454591991473469422_n.jpg?stp=cp6_dst-jpg&_nc_cat=1&ccb=1-7&_nc_sid=c42490&_nc_ohc=mYXE-vOjjd0AX-OQipr&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfDmFhysnHBux1vZ9TWJ_sC6HFcRBmxkfsdKIYrZFyVQVw&oe=658E32EC"
                                alt="avt1"
                                fallback="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/414438596_1562387654601401_8412108330720291341_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=c42490&_nc_ohc=VZ8EsC2hJV8AX-ZcQyB&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfA23dysrgzY0rDi8XfvdVgAAE75qZRBBd5aRB2BIZreWg&oe=658F0070"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <EllipsisIcon />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}
export default Header;
