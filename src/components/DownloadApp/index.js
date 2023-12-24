import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './DownloadApp.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function DownloadApp({ children, data }) {
    return (
        //Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                // visible
                delay={[0, 700]}
                offset={[12, 8]}
                placement="bottom-end"
                render={(attrs) => (
                    // <div className={cx('wrapper')} tabIndex={-1} {...attrs}>
                    <PopperWrapper
                        className={cx('wrapper')}
                        tabIndex={-1}
                        {...attrs}
                    >
                        {data.image}
                        <h2 className={cx('title')}>{data.title}</h2>
                        <p className={cx('sub-title')}>{data.subTitle}</p>
                        <Button primary className={cx('download-btn')}>
                            Download
                        </Button>
                    </PopperWrapper>
                    // </div>
                )}
            >
                {children}
            </HeadlessTippy>
        </div>
    );
}

export default DownloadApp;
