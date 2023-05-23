from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import StaleElementReferenceException
import json
import time

with open("auroracontracts.json", "r") as f:
    data = json.load(f)

start_index = 0

addresses = [item["address"] for item in data if item["tx"] > 1000]

# addresses = [item["address"] for item in data if 'tx' in item and item["tx"] > 1000]

addresses = addresses[start_index:]

print(len(addresses))

driver = driver = webdriver.Chrome("/home/ben/Downloads/chromedriver")

wait = WebDriverWait(driver, 10)

contractList = []

for address in addresses:

    driver.get(
        "https://explorer.mainnet.aurora.dev/address/"
        + address
        + "/contracts#address-tabs"
    )

    time.sleep(3)

    try:

        contractData = driver.find_elements(
            "xpath", '//dd[@class="col-sm-8 col-md-8 col-lg-9"]'
        )

        contractName = contractData[0]

        sourceCodes = driver.find_elements("xpath", '//code[@class="nohighlight"]')

        abi = sourceCodes[1]

        contractInfo = {"address": address, "name": contractName.text, "abi": abi.text}

        contractList.append(contractInfo)

        with open("auroracontractsfinal.json", "w") as f:
            json.dump(contractList, f)

        print(len(contractList) + start_index)
        print(contractInfo["name"])

    except:
        print("skipped " + address)
        continue


print(len(contractList) + start_index)
