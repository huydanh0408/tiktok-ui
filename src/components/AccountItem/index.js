import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEllipsis } from '@fortawesome/free-solid-svg-icons';

import style from './AcocountItem.module.scss';
import Image from '~/components/Image';

const cx = className.bind(style);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f8870ee88db4ac38a8f3324b37dfec32~c5_300x300.webp?x-expires=1702864800&x-signature=wWzavso3ynRMT4zLvYJwI06ov5s%3D"
                alt="meichan"
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>nhatkycuameichan</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <p className={cx('name')}>meichannnn</p>
            </div>
            <button className={cx('more')}>
                <FontAwesomeIcon icon={faEllipsis} />
            </button>
        </div>
    );
}

export default AccountItem;
