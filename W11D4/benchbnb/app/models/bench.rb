class Bench < ApplicationRecord
  def self.in_bounds(bounds)
    benches_in_bound = Bench.where("lat BETWEEN ? AND ?", bounds[:southWest][:lat], bounds[:northEast][:lat])
      .where("lng BETWEEN ? AND ?", bounds[:southWest][:lng], bounds[:northEast][:lng])
    return benches_in_bound
  end
end
