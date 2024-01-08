import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import ProductCard from "@/Components/ProductCard";
import { Inertia } from "@inertiajs/inertia";
import { Link, Head } from "@inertiajs/react";
import { useState } from "react";

export default function Home(props) {
    const [selectedItems, setSelectedItems] = useState([]);
    const id = props.pemesanan ? props.pemesanan.id : "";

    const handleToggleSelection = (value) => {
        setSelectedItems((prevItems) => {
            if (prevItems.includes(value)) {
                return prevItems.filter((item) => item !== value);
            } else {
                return [...prevItems, value];
            }
        });
    };

    const handleBeliClick = () => {
        if (selectedItems.length > 0) {
            const queryString = selectedItems.join(",");
            // window.location.href = `/order?selectedItems=${queryString}`;
            Inertia.visit("/order", {
                data: {
                    pesanan: queryString,
                },
            });
        }
    };

    const handleEditClick = () => {
        if (id != 0) {
            Inertia.visit(`/edit/${id}`);
        }
    };

    // const handleDeleteClick = () => {
    //     const data = {
    //         id,
    //     };

    //     router.post("/delete", data);
    // };

    return (
        <>
            <Head title="Pemesanan | SAResto" />
            <Navbar />
            {/* hero  */}
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://images.english.elpais.com/resizer/VyXtQyWOWChJl7IevhHjbpQS5_0=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/LCL7RLZIPJCKXFVHEYD3NK35ZI.jpg)",
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-8xl font-bold">SAResto</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-6 px-6">
                {/* product */}

                <h1 className="mb-5 text-5xl font-bold">Menu Makanan</h1>
                <div className="grid grid-cols-4 gap-4 justify-around">
                    <ProductCard
                        imageUrl={
                            "https://cdns.diadona.co.id/diadona.id/resized/664xauto//real/2022/06/29/363893/makanan-khas-indonesia-mie-aceh.jpg"
                        }
                        title={"Mie Aceh"}
                        harga={"15.000"}
                        value={"Mie Aceh"}
                        onChange={() => handleToggleSelection("Mie Aceh")}
                    />
                    <ProductCard
                        imageUrl={
                            "https://cdns.diadona.co.id/diadona.id/resized/664xauto//real/2020/01/02/4747/ilustrasi-rendang-.jpg"
                        }
                        title={"Rendang "}
                        harga={"10.000"}
                        value={"Rendang "}
                        onChange={() => handleToggleSelection("Rendang")}
                    />
                    <ProductCard
                        imageUrl={
                            "https://cdns.diadona.co.id/diadona.id/resized/664xauto//real/2020/03/06/25199/ilustrasi-kue-bika-ambon.jpg"
                        }
                        title={"Bika Ambon"}
                        harga={"8.000"}
                        value={"Bika Ambon"}
                        onChange={() => handleToggleSelection("Bika Ambon")}
                    />
                    <ProductCard
                        imageUrl={
                            "https://cdns.diadona.co.id/diadona.id/resized/664xauto//real/2022/06/29/363913/makanan-khas-indonesia-gulai-ikan-patin.jpg"
                        }
                        title={"Gulai Ikan Patin"}
                        harga={"15.000"}
                        value={"Gulai Ikan Patin"}
                        onChange={() =>
                            handleToggleSelection("Gulai Ikan Patin")
                        }
                    />
                    <ProductCard
                        imageUrl={
                            "https://cdns.diadona.co.id/diadona.id/resized/664xauto//real/2020/01/17/9003/ilustrasi-pendap-bengkulu.jpg"
                        }
                        title={"Pendap"}
                        harga={"22.000"}
                        value={"Pendap"}
                        onChange={() => handleToggleSelection("Pendap")}
                    />
                    {/* Minuman */}
                    <ProductCard
                        imageUrl={
                            "https://cdn-brilio-net.akamaized.net/webp/news/2021/05/28/206823/1482835-resep-minuman-ala-kafe.jpg"
                        }
                        title={"Taro Milk Tea"}
                        harga={"10.000"}
                        value={"Taro Milk Tea"}
                        onChange={() => handleToggleSelection("Taro Milk Tea")}
                    />
                    <ProductCard
                        imageUrl={
                            "https://cdn-brilio-net.akamaized.net/webp/news/2021/05/28/206823/1482838-resep-minuman-ala-kafe.jpg"
                        }
                        title={"Es cappucino cincau"}
                        harga={"9.000"}
                        value={"Es cappucino cincau"}
                        onChange={() =>
                            handleToggleSelection("Es cappucino cincau")
                        }
                    />
                </div>
                {/* {selectedItems.length > 0 && ( */}
                <button
                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-active btn-success fixed bottom-5 right-5"
                    onClick={handleBeliClick}
                >
                    Beli
                </button>
                {/* )} */}

                {/* Detail Pesanan */}
                <h1 className="mb-5 text-5xl font-bold mt-6">Detail Pesanan</h1>

                {props.pemesanan ? (
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table-lg table-zebra">
                                <tbody>
                                    <tr>
                                        <td>Nomor Meja</td>
                                        <td>:</td>
                                        <td>{props.pemesanan.nomor_meja}</td>
                                    </tr>
                                    <tr>
                                        <td>Nama</td>
                                        <td>:</td>
                                        <td>{props.pemesanan.nama}</td>
                                    </tr>
                                    <tr>
                                        <td>Pesanan</td>
                                        <td>:</td>
                                        <td>{props.pemesanan.pesanan}</td>
                                    </tr>
                                    <tr>
                                        <td>Waktu Pesanan</td>
                                        <td>:</td>
                                        <td>{props.pemesanan.created_at}</td>
                                    </tr>
                                    <tr>
                                        <td>Waktu Edit</td>
                                        <td>:</td>
                                        <td>{props.pemesanan.updated_at}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button
                            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-active btn-warning fixed bottom-5 right-32"
                            onClick={handleEditClick}
                        >
                            Edit
                        </button>
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-active btn-error fixed bottom-5 right-30">
                            Hapus
                        </button>
                        <Link
                            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-active btn-error fixed bottom-5 right-30"
                            href={route("delete")}
                            method="post"
                            data={{ id: id }}
                            as="button"
                        >
                            Hapus
                        </Link>
                    </div>
                ) : (
                    <h1 className="mb-5 text-xl font-bold mt-6 text-center">
                        Belum Melakukan Pemesanan
                    </h1>
                )}
            </div>

            <Footer />
        </>
    );
}
