import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import HeadlessTippy from '@tippyjs/react/headless';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faPlus } from '@fortawesome/free-solid-svg-icons';
import Switch from 'react-switch';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Menu';
import DownloadApp from '~/components/DownloadApp';

const cx = className.bind(styles);

const userCurrent = true;
// const userCurrent = false;

const MENU_ITEMS = [
    {
        icon: images.liveIcon,
        title: 'LIVE Creator Hub',
        href: 'https://www.tiktok.com/live/creators/vi-VN/?enter_from=more&lang=en&region=VN',
    },
    {
        icon: images.languageIcon,
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
        icon: images.questionIcon,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: images.keyboardIcon,
        title: 'Keyboard shortcuts',
    },
    {
        icon: images.darkModeIcon,
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
        icon: images.userIcon,
        title: 'View Profile',
        to: '/@huydanh.12',
    },
    {
        icon: images.favoriteIcon,
        title: 'Favorites',
        to: '/@huydanh.12',
    },
    {
        icon: images.tiktokCoinIcon,
        title: 'Get Coins',
        to: '/coin',
    },
    {
        icon: images.settingIcon,
        title: 'Settings',
        to: '/setting',
    },
    {
        icon: images.liveStudioIcon,
        title: 'LIVE Studio',
        to: '/live',
    },

    ...MENU_ITEMS,
    {
        icon: images.logOutIcon,
        title: 'Log out',
        separate: true,
    },
];

const DOWNLOAD_APP_DATA = {
    image: images.downloadTiktokApp,
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
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 3000);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />

                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex={-1}
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <span className={cx('loading')}>
                            {images.loadingIcon}
                        </span>
                        <button className={cx('search-btn')}>
                            {images.searchIcon}
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('action')}>
                    <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} light>
                        Upload
                    </Button>

                    {/* <Button primary>Log in</Button> */}
                    {userCurrent || <Button primary>Log in</Button>}

                    <DownloadApp data={DOWNLOAD_APP_DATA}>
                        <button className={cx('download-btn')}>
                            {images.deviceIcon}
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
                                    {images.messageIcon}
                                </button>
                            </Tippy>
                            <Tippy
                                content="Inbox"
                                delay={[0, 200]}
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    {images.inboxIcon}
                                </button>
                            </Tippy>
                        </>
                    )}

                    <Menu
                        items={userCurrent ? USER_MENU_ITEMS : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {userCurrent ? (
                            <img
                                className={cx('user-avatar')}
                                src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/410545212_2433221633548469_6567833593769972942_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=c42490&_nc_ohc=ckb_7hq-Ak4AX9vpMzS&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfC0FpNuz0__MgXdEwjJN2d-t2swvV-5mC_gkItzE3ht1g&oe=65876287"
                                alt="avt1"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                {images.ellipsisIcon}
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}
export default Header;
