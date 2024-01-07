export default function Navbar() {
    return (
        <div className="navbar fixed z-20 bg-base-100">
            <div className="flex-1">
                <img src="../../img/FINISH 2v2.png" alt="" />
                <a className="btn btn-ghost text-xl">SAResto</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a>Link</a>
                    </li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li>
                                    <a>Link 1</a>
                                </li>
                                <li>
                                    <a>Link 2</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
}