import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ to, title, icon }) {
    // icon solid
    const iconSolid = { ...icon };
    const props = iconSolid.props;
    iconSolid.props = { ...props, solid: true };

    return (
        <NavLink
            className={({ isActive }) =>
                cx('menu-item', {
                    active: isActive,
                })
            }
            to={to}
        >
            {({ isActive }) => (
                <>
                    <span className={cx('icon')}>
                        {isActive ? iconSolid : icon}
                    </span>
                    <span className={cx('title')}>{title}</span>
                </>
            )}
        </NavLink>
    );
}

MenuItem.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuItem;
