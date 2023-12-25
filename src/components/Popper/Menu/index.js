import PropTypes from 'prop-types';
import { useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from '~/components/Popper/Menu/MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({
    children,
    items = [],
    onChange = defaultFn,
    hideOnClick = false,
}) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                            renderItems();
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        //Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                // visible
                delay={[0, 700]}
                offset={[12, 8]}
                placement="bottom-end"
                hideOnClick={hideOnClick}
                render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            {history.length > 1 && (
                                <Header
                                    title={current.title}
                                    onBack={() => {
                                        setHistory((prev) =>
                                            prev.slice(0, prev.length - 1),
                                        );
                                    }}
                                />
                            )}
                            <div
                                className={cx(
                                    'menu-body',
                                    history.length > 1 && 'menu-body-lv2',
                                )}
                            >
                                {renderItems()}
                            </div>
                        </PopperWrapper>
                    </div>
                )}
                onHide={() => {
                    setHistory((prev) => prev.slice(0, 1));
                }}
            >
                {children}
            </HeadlessTippy>
        </div>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
};

export default Menu;
