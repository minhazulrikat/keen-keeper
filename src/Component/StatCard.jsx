function StatCard({ value, label, large = false }) {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body items-center justify-center px-4 py-5 text-center">

        <p
          className={`font-semibold text-primary ${
            large ? "text-lg sm:text-xl" : "text-xl"
          }`}
        >
          {value}
        </p>

        <p className="text-sm text-base-content/60 sm:text-base">
          {label}
        </p>

      </div>
    </div>
  );
}

export default StatCard;