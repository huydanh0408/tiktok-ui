import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f8870ee88db4ac38a8f3324b37dfec32~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1703808000&x-signature=vuGV1b7%2F%2BIMbkV6h5o86EBPavvw%3D"
                alt=""
            />
            <span className={cx('info')}>
                <h4 className={cx('username')}>
                    <span className={cx('username-text')}>
                        nhatkycuameichannnn
                    </span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <p className={cx('name')}>meichannnnn</p>
            </span>
        </div>
    );
}

export default AccountItem;
