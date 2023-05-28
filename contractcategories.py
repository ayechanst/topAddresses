import json

with open('daodata.json', 'r') as f:
    data = json.load(f)

newData = []

for item in data:
    print(item['name'])
    print(item['address'])
    category = input('enter the contract category:\n')
    item['category'] = category
    name = input('Enter the contract name (or press Enter to skip):\n ')
    if name:
        item['name'] = name
    newData.append(item)
    with open('finaldaos.json', 'w') as f:
        json.dump(newData, f)

print('done')