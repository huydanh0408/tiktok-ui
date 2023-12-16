import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = className.bind(styles);

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
                <div>
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
                                    <h4 className={cx('search-title')}>
                                        Accounts
                                    </h4>
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
                </div>
                <div className={cx('action')}>action</div>
            </div>
        </div>
    );
}
export default Header;
