import { Link } from "@inertiajs/react";

export default function Navbar() {
    return (
        <div className="navbar fixed z-20 bg-base-100 top-0">
            <div className="flex-1">
                <img src="../../img/FINISH 2v2.png" alt="" />
                <Link
                    className="btn btn-ghost text-xl"
                    href={route("home")}
                    as="button"
                >
                    SAResto
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href={route("home")}>Home</Link>
                    </li>
                    <li>
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
