json.pokemon do
  json.extract! @pokemon, *@pokemon.attributes.keys
  json.extract! @pokemon, :item_ids
end

json.items do
    @pokemon.items.each do |item|
        json.set! item.id do
            json.extract! item, *item.attributes.keys
        end
    end
end