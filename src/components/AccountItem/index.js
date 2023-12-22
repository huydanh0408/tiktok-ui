import classNameS from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEllipsis } from '@fortawesome/free-solid-svg-icons';

import style from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNameS.bind(style);

function AccountItem({ data }) {
    return (
        <Link className={cx('wrapper')} to={`/@${data.nickname}`}>
            <Image
                className={cx('avatar')}
                src={data.avatar}
                alt={data.full_name}
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>{data.nickname}</span>
                    {data.tick && (
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCheckCircle}
                        />
                    )}
                </h4>
                <p className={cx('name')}>{data.full_name}</p>
            </div>
            <button className={cx('more')}>
                <FontAwesomeIcon icon={faEllipsis} />
            </button>
        </Link>
    );
}

export default AccountItem;
