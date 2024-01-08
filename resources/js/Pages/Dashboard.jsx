import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia-react";
import { Link, Head, router } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Dashboard(props) {
    return (
        <>
            <Head title="Dashboard | SAResto" />
            <Navbar />

            <div className="container mt-20">
                <h1 className="mb-5 text-5xl font-bold m-5">Dashboard</h1>
                <div className="overflow-x-auto">
                    <table className="table-sm table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Id</th>
                                <th>Nomor Meja</th>
                                <th>Nama</th>
                                <th>Pesanan</th>
                                <th>Waktu Pesanan</th>
                                <th>Waktu Edit</th>
                                <th>Opsi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {props.pemesanan ? (
                                props.pemesanan.map((data, i) => {
                                    return (
                                        <tr key={i}>
                                            <th>{i + 1}</th>
                                            <td>{data.id}</td>
                                            <td>{data.nomor_meja}</td>
                                            <td>{data.nama}</td>
                                            <td>{data.pesanan}</td>
                                            <td>{data.created_at}</td>
                                            <td>{data.updated_at}</td>
                                            <td>
                                                <Link
                                                    href={route("delete")}
                                                    className="text-warning"
                                                    data={data.id}
                                                >
                                                    Edit
                                                </Link>
                                                |
                                                <Link
                                                    href={route("delete")}
                                                    className="text-error"
                                                    data={data.id}
                                                >
                                                    Hapus
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <>
                                    <p>Belum ada data</p>
                                </>
                            )}
                        </tbody>
                    </table>

                    <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box mt-10">
                        <li>
                            <Link href={route("home")}>Tambah Data</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <Footer />
        </>
    );
}
