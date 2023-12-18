import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
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
const MENU_ITEMS = [
    {
        icon: images.liveIcon,
        title: 'LIVE Creator Hub',
        href: 'https://www.tiktok.com/live/creators/vi-VN/?enter_from=more&lang=en&region=VN',
    },
    {
        icon: images.languageIcon,
        title: 'English',
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

const DOWNLOAD_APP_DATA = {
    image: images.downloadTiktokApp,
    title: 'TikTok desktop app',
    subTitle:
        'We maintain the same content and product safety standards across TikTok web and desktop app.',
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
                {/* <div> */}
                <Tippy
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
                </Tippy>
                {/* </div> */}
                <div className={cx('action')}>
                    <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} light>
                        Upload
                    </Button>

                    {/* <Button primary>Log in</Button> */}
                    <Button primary>Log in</Button>

                    <DownloadApp data={DOWNLOAD_APP_DATA}>
                        <button className={cx('download-btn')}>
                            {images.deviceIcon}
                        </button>
                    </DownloadApp>

                    <Menu items={MENU_ITEMS}>
                        <button className={cx('more-btn')}>
                            {images.ellipsisIcon}
                        </button>
                    </Menu>
                </div>
            </div>
        </div>
    );
}
export default Header;
