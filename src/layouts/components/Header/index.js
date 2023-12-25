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
    DarkModeIcon,
    DeviceIcon,
    DownloadTikTokAppIcon,
    EllipsisIcon,
    FavoriteIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    LiveCreatorHubIcon,
    LiveStudioIcon,
    LogoutIcon,
    MessageIcon,
    QuestionIcon,
    SettingIcon,
    TikTokCoinIcon,
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
        icon: <LiveCreatorHubIcon />,
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
        icon: <DarkModeIcon />,
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
        icon: <FavoriteIcon />,
        title: 'Favorites',
        to: '/@huydanh.12',
    },
    {
        icon: <TikTokCoinIcon />,
        title: 'Get Coins',
        to: '/coin',
    },
    {
        icon: <SettingIcon />,
        title: 'Settings',
        to: '/setting',
    },
    {
        icon: <LiveStudioIcon />,
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
    image: <DownloadTikTokAppIcon />,
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
                                    {<MessageIcon />}
                                </button>
                            </Tippy>
                            <Tippy
                                content="Inbox"
                                delay={[0, 200]}
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
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
                                src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/410545212_2433221633548469_6567833593769972942_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=c42490&_nc_ohc=ckb_7hq-Ak4AX9vpMzS&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfC0FpNuz0__MgXdEwjJN2d-t2swvV-5mC_gkItzE3ht1g&oe=65876287"
                                alt="avt1"
                                fallback="https://scontent.cdninstagram.com/v/t39.30808-6/396386610_18285487642146857_6470196609805964296_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=9j4epaUt_AgAX9z4tNH&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzIyMzY4NjkzNjA0MDkxMzgwMA%3D%3D.2-ccb7-5&oh=00_AfDIzZ_7XY5pxQe8E61AGT4sHN-hCU5K0TpnOTJ5DwtXhw&oe=6588FFA4&_nc_sid=10d13b"
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
