import className from 'classnames/bind';
import styles from './Header.module.scss';

const cx = className.bind(styles);
console.log('cx:', cx);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>Header</div>
        </div>
    );
}
export default Header;
