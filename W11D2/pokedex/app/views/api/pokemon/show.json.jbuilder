json.pokemon do
#   json.extract! @pokemon, *@pokemon.attributes.keys
  json.merge! @pokemon.attributes.except("created_at", "updated_at")
  json.extract! @pokemon, :item_ids
  json.image_url asset_path("pokemon_snaps/#{@pokemon.image_url}")
end

json.items do
    @pokemon.items.each do |item|
        json.set! item.id do
            # json.extract! item, *item.attributes.keys
            json.merge! item.attributes.except("created_at", "updated_at")
        end
    end
end