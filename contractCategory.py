import json

with open('noCategoryAuroraFinal.json', 'r') as f:
    data = json.load(f)

newData = []

for item in data:
    print(item['name'])
    print(item['address'])
    category = input('enter the contract category:\n')
    item['category'] = category
    newData.append(item)
    with open('auroraFinalWithCategories.json', 'w') as f:
        json.dump(newData, f)

print('done')