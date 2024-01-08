export default function ProductCard({
    imageUrl,
    title,
    harga,
    value,
    onChange,
}) {
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={imageUrl} alt={title} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <h3>Rp. {harga}</h3>
                <div className="card-actions">
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input
                                type="checkbox"
                                className="checkbox checkbox-primary"
                                value={value}
                                name="pesanan[]"
                                onChange={onChange}
                            />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
