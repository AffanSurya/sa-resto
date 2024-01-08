import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia-react";
import { Link, Head, router } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Order(props) {
    const [nomor_meja, setNomor_Meja] = useState(props.pemesanan.nomor_meja);
    const [nama, setNama] = useState(props.pemesanan.nama);
    const pesanan = props.pemesanan.pesanan;
    const id = props.pemesanan.id;

    console.log(props);

    const handleSubmit = () => {
        console.log("yow yow yow ");
        const data = {
            id,
            nomor_meja,
            nama,
            pesanan,
        };

        router.post("/update", data);
    };
    console.log("Props Pemesanan:", props.pemesanan.pesanan[0]);

    return (
        <>
            <Head title="Edit | SAResto" />
            <Navbar />

            <div className="container mt-16">
                <div></div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">
                                Edit Detail Pesanan
                            </h1>
                            <p className="py-6">
                                Isi detail informasi Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Soluta dignissimos
                                officiis voluptatem modi ipsum mollitia
                                assumenda pariatur, aliquam quod? Quis.
                            </p>
                        </div>

                        <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                            <div className="card-body">
                                <h2 className="card-title">Buat Pesanan</h2>
                                <label className="label">
                                    <span className="label-text">No. Meja</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="2A/5B"
                                    defaultValue={props.pemesanan.nomor_meja}
                                    onChange={(nomor_meja) =>
                                        setNomor_Meja(nomor_meja.target.value)
                                    }
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <span className="label-text">Nama</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nama"
                                    defaultValue={props.pemesanan.nama}
                                    onChange={(nama) =>
                                        setNama(nama.target.value)
                                    }
                                    className="input input-bordered"
                                    required
                                />

                                <label className="label">
                                    <span className="label-text">
                                        Informasi Pesanan
                                    </span>
                                </label>
                                <div className="overflow-x-auto">
                                    <table className="table-md table-zebra">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Pesanan</th>
                                                <th>Harga</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {props.pemesanan.pesanan &&
                                            props.pemesanan.pesanan.length >
                                                0 ? (
                                                JSON.parse(
                                                    props.pemesanan.pesanan
                                                ).map((item, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{item}</td>
                                                        <td>-</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td
                                                        colSpan="3"
                                                        className="text-lg text-center"
                                                    >
                                                        Tidak ada pesanan
                                                    </td>
                                                </tr>
                                            )}
                                            <tr>
                                                <td></td>
                                                <td>Total Harga</td>
                                                <td>-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="card-actions justify-end">
                                    <button
                                        className="btn btn-primary text-lg"
                                        onClick={() => handleSubmit()}
                                    >
                                        Edit Data
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
