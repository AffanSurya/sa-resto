import Navbar from "@/Components/Navbar";
import ProductCard from "@/Components/ProductCard";
import { Link, Head } from "@inertiajs/react";

export default function Homepage(props) {
    console.log(props.pemesanan);
    return (
        <>
            <Head title="Pemesanan | Sa Resto" />
            <Navbar />
            {/* hero  */}
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://nibble-images.b-cdn.net/nibble/original_images/restoran_outdoor_di_jakarta_00_dce02bfed8_qPuOFNQAI.jpg)",
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
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-6 px-6">
                {/* product */}
                <form action="" method="get">
                    <h1 className="mb-5 text-5xl font-bold">Menu Makanan</h1>
                    <div className="grid grid-cols-4 gap-4 justify-around">
                        <ProductCard
                            imageUrl={
                                "https://cdns.diadona.co.id/diadona.id/resized/664xauto//real/2022/06/29/363893/makanan-khas-indonesia-mie-aceh.jpg"
                            }
                            title={"Mie Aceh"}
                            harga={"15.000"}
                            value={"Mie Aceh"}
                        />
                        <ProductCard
                            imageUrl={
                                "https://cdns.diadona.co.id/diadona.id/resized/664xauto//real/2020/01/02/4747/ilustrasi-rendang-.jpg"
                            }
                            title={"Rendang "}
                            harga={"10.000"}
                            value={"Rendang "}
                        />
                        <ProductCard
                            imageUrl={
                                "https://cdns.diadona.co.id/diadona.id/resized/664xauto//real/2020/03/06/25199/ilustrasi-kue-bika-ambon.jpg"
                            }
                            title={"Bika Ambon"}
                            harga={"8.000"}
                            value={"Bika Ambon"}
                        />
                        <ProductCard
                            imageUrl={
                                "https://cdns.diadona.co.id/diadona.id/resized/664xauto//real/2022/06/29/363913/makanan-khas-indonesia-gulai-ikan-patin.jpg"
                            }
                            title={"Gulai Ikan Patin"}
                            harga={"15.000"}
                            value={"Gulai Ikan Patin"}
                        />
                        <ProductCard
                            imageUrl={
                                "https://cdns.diadona.co.id/diadona.id/resized/664xauto//real/2020/01/17/9003/ilustrasi-pendap-bengkulu.jpg"
                            }
                            title={"Pendap"}
                            harga={"22.000"}
                            value={"Pendap"}
                        />
                        {/* Minuman */}
                        <ProductCard
                            imageUrl={
                                "https://cdn-brilio-net.akamaized.net/webp/news/2021/05/28/206823/1482835-resep-minuman-ala-kafe.jpg"
                            }
                            title={"Taro Milk Tea"}
                            harga={"10.000"}
                            value={"Taro Milk Tea"}
                        />
                        <ProductCard
                            imageUrl={
                                "https://cdn-brilio-net.akamaized.net/webp/news/2021/05/28/206823/1482838-resep-minuman-ala-kafe.jpg"
                            }
                            title={"Es cappucino cincau"}
                            harga={"9.000"}
                            value={"Es cappucino cincau"}
                        />
                    </div>
                    <button
                        className="btn btn-active btn-info fixed bottom-5 right-5"
                        onClick={() =>
                            document.getElementById("my_modal").showModal()
                        }
                    >
                        Beli
                    </button>
                </form>

                {/* Modal */}
                <dialog id="my_modal" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </button>
                        </form>
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">
                            Press ESC key or click on ✕ button to close
                        </p>
                    </div>
                </dialog>

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
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <h1 className="mb-5 text-xl font-bold mt-6 text-center">
                        Belum Melakukan Pemesanan
                    </h1>
                )}
            </div>

            {/* footer */}
            <footer className="footer footer-center p-4 bg-base-300 text-base-content mt-10">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Lfa</p>
                </aside>
            </footer>
        </>
    );
}
