import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia-react";
import { Link, Head, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
Footer;

export default function Order(props) {
    const [nomor_meja, setNomor_Meja] = useState("");
    const [nama, setNama] = useState("");
    const [pesanan, setPesanan] = useState([]);

    useEffect(() => {
        // Mendapatkan nilai pesanan dari URL
        const pesananString = props.pesanan || "";
        // Memecah string pesanan menjadi array
        const pesananArray = pesananString.split(",");
        // Menetapkan array pesanan ke state
        setPesanan(pesananArray);
    }, [props.pesanan]);

    console.log(props);

    const handleSubmit = () => {
        console.log("yow yow yow ");
        const data = {
            nomor_meja,
            nama,
            pesanan,
        };

        router.post("/store", data);
    };
    console.log("hahahai", props);

    return (
        <>
            <Head title="Order | SAResto" />
            <Navbar />

            <div className="container mt-16">
                <div></div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">
                                Pesan Makanan
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
                                            {pesanan.length > 0 ? (
                                                pesanan.map((pesanan, i) => (
                                                    <tr key={i}>
                                                        <th>{i + 1}</th>
                                                        <td>{pesanan}</td>
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
                                                <th></th>
                                                <th>Total Harga</th>
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
                                        Pesan Sekarang
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
