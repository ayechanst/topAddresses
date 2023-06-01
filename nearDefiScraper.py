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

driver.get("https://awesomenear.com/categories/defi")

time.sleep(5)

near_button = driver.find_elements("xpath", '//div[@class="tab-item"]/a')[1]

near_button.click()

contracts = driver.find_elements(
    "xpath", '//div[@class="column col-4 col-lg-6 col-sm-12"]'
)
for i in range(48):

    driver.implicitly_wait(5)

    contract_link = contracts[i]

    contract_link_location = contract_link.location_once_scrolled_into_view
    ActionChains(driver).move_to_element(contract_link).perform()

    contract_link.click()

    driver.switch_to.window(driver.window_handles[-1])

    driver.implicitly_wait(5)

    try:
        address = driver.find_elements("xpath", '//div[@class="token-widget-value"]')[0].text
        name = driver.find_element("xpath", "//h1").text
        image = driver.find_elements("xpath", "//img")[1].get_attribute("src")

    except:
        print("address not found")
        driver.close()
        driver.switch_to.window(driver.window_handles[0])
        continue

    contractInfo = {
        "address": address,
        "name": name,
        "image": image,
        "category": "Defi",
    }

    contractList.append(contractInfo)

    print(address)
    print(name)
    print(image + "\n")

    if len(contractList) == 25:
        break

    
 
    driver.close()
    driver.switch_to.window(driver.window_handles[0])

# with open("nearcontracts.json", "a") as f:
# json.dump(contractList, f)

print(len(contractList))
print("\ndone")
