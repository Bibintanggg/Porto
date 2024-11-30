function Activity({ name, description, image }) {
  return (
    <div className="relative w-96 h-64 overflow-hidden rounded-lg shadow-lg group">
      {/* Gambar */}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-50"
      />

      {/* Overlay dengan efek garis-garis silver */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-50 bg-[length:200%_200%] animate-hover transition-opacity duration-500"></div>

      {/* Teks */}
      <div className="absolute bottom-2 left-2 text-white z-10">
        <h3 className="font-bold text-lg bg-transparent">{name}</h3>
        <p className="text-sm bg-transparent">{description}</p>
      </div>
    </div>
  );
}

export default Activity;
