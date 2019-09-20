require 'csv'

keys = []
library = []

CSV.foreach('inventory.csv') do |row|
  row.each do |item|
    keys << item
  end
end

CSV.foreach('library.csv') do |row|
  row.each do |item|
    library << item
  end
end

spares = []
keys.each do |key|
  spares << key if library.include? key
end

puts spares.join(',')
