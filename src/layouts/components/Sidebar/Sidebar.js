import className from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from '~/layouts/components/Sidebar/Menu';
import {
    HomeIcon,
    LiveSidebarIcon,
    UserGroupIcon,
    UserIcon,
    CompassIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = className.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<CompassIcon />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveSidebarIcon />}
                />
                <MenuItem
                    title="Profile"
                    to={(config.routes.profile = '/@huydanh.12')}
                    icon={<UserIcon width="2.4rem" height="2.4rem" />}
                />
            </Menu>

            <SuggestedAccounts label="Suggested accounts" />

            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default Sidebar;
