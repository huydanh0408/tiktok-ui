import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview({ children }) {
    const handleRander = (props) => (
        <PopperWrapper className={cx('wrapper')} tabIndex={-1} {...props}>
            <div className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f8870ee88db4ac38a8f3324b37dfec32~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1703808000&x-signature=vuGV1b7%2F%2BIMbkV6h5o86EBPavvw%3D"
                    alt=""
                />
                <Button outline>Follow</Button>
            </div>
            <div className={cx('body')}>
                <div className={cx('username')}>
                    <span className={cx('username-text')}>
                        nhatkycuameichannnn
                    </span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </div>
                <p className={cx('name')}>meichannnnn</p>
            </div>
            <div className={cx('stat')}>
                <strong className={cx('value')}>2.6M</strong>
                <span className={cx('label')}>Followers</span>
                <strong className={cx('value')}>35.8M</strong>
                <span className={cx('label')}>Likes</span>
            </div>
            <div className={cx('bio')}>Simple Piano Tutorials</div>
        </PopperWrapper>
    );

    return (
        //Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                // visible
                delay={[800, 0]}
                offset={[20, 0]}
                placement="bottom"
                render={handleRander}
            >
                {children}
            </HeadlessTippy>
        </div>
    );
}

AccountPreview.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AccountPreview;
