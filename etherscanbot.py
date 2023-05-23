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

with open("mainnetaddresses.json", "r") as f:
    data = json.load(f)

start_index = 0

addresses = [item["address"] for item in data]

addresses = addresses[start_index:]

print(len(addresses))

driver = driver = webdriver.Chrome("/home/ben/Downloads/chromedriver")

wait = WebDriverWait(driver, 10)

contractList = []

for address in addresses:

    driver.get("https://etherscan.io/address/" + address + "#code")

    time.sleep(3)

    try:

        contractName = driver.find_element(
            "xpath",
            '//div[@id="ContentPlaceHolder1_contractCodeDiv"]/div/div/div/div/span',
        )

        sourceCodes = driver.find_elements("xpath", '//div["id=auditReportId"]/div/pre')

        abi = sourceCodes[1]

        contractInfo = {"address": address, "name": contractName.text, "abi": abi.text}

        contractList.append(contractInfo)

        with open("mainnetfinal.json", "w") as f:
            json.dump(contractList, f)

        print(len(contractList) + start_index)
        print(contractInfo["name"])

    except:
        print("skipped " + address)
        continue


print(len(contractList) + start_index)
