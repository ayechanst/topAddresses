from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import StaleElementReferenceException
import time
import json

driver = webdriver.Chrome("/home/ben/Downloads/chromedriver")

contractList = []

for i in range(25):

    driver.get("https://nearblocks.io/nft-tokens")

    time.sleep(3)

    tokens = driver.find_elements("xpath", '//a[@class="flex text-green-500"]')

    tokens[i].click()

    time.sleep(3)

    address = driver.find_elements("xpath", '//a[@class="text-green-500"]')[0].text

    name = driver.find_element("xpath", '//span[@class="inline-flex align-middle font-semibold"]').text

    image = driver.find_elements("xpath", "//img")[6].get_attribute("src")

    contractInfo = {"address": address, "name": name, "image": image, "category": "NFT"}

    contractList.append(contractInfo)


    print(address)
    print(name)
    print(image + "\n")

with open("nearcontracts.json", "a") as f:
    json.dump(contractList, f)

print("\ndone")