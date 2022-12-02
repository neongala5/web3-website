import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options

class PythonOrgSearch(unittest.TestCase):

   def setUp(self):
        # microsoft edge driver
        self.edgeDriver = webdriver.Edge("C:\Program Files (x86)\msedgedriver.exe")
        self.edgeDriver.get("https://neongala5.github.io/web3-website/")

       # chrome driver
        self.chromeDriver = webdriver.Chrome("C:\Program Files (x86)\chromedriver.exe")
        self.chromeDriver.get("https://neongala5.github.io/web3-website/")

       # firefox driver
        options = Options()
        options.binary_location = r'C:\Program Files\Mozilla Firefox\firefox.exe'
        self.fireFoxDriver = webdriver.Firefox(executable_path=r"C:\Program Files (x86)\geckodriver.exe", options=options)
        self.fireFoxDriver.get("https://neongala5.github.io/web3-website/")

   def test_title_is_correct(self):
        assert "METASECURE" in self.edgeDriver.title
        assert "METASECURE" in self.chromeDriver.title
        assert "METASECURE" in self.fireFoxDriver.title

   def test_languages_dropdown_is_in_document(self):
        edgeLanguageDropdown = self.edgeDriver.find_element(By.ID, "languages")
        assert edgeLanguageDropdown.is_displayed()
        chromeLanguageDropdown = self.chromeDriver.find_element(By.ID, "languages")
        assert chromeLanguageDropdown.is_displayed()
        fireFoxLanguageDropdown = self.fireFoxDriver.find_element(By.ID, "languages")
        assert fireFoxLanguageDropdown.is_displayed()

   def test_teams_dropdown_is_in_document(self):
        edgeTeamsDropdown = self.edgeDriver.find_element(By.ID, "teams-dropdown")
        assert edgeTeamsDropdown.is_displayed()
        chromeTeamsDropdown = self.chromeDriver.find_element(By.ID, "teams-dropdown")
        assert chromeTeamsDropdown.is_displayed()
        fireFoxTeamsDropdown = self.fireFoxDriver.find_element(By.ID, "teams-dropdown")
        assert fireFoxTeamsDropdown.is_displayed()

   def test_resource_dropdown_is_in_document(self):
        edgeResourceDropdown = self.edgeDriver.find_element(By.ID, "resource-dropdown")
        assert edgeResourceDropdown.is_displayed()
        chromeResourceDropdown = self.chromeDriver.find_element(By.ID, "resource-dropdown")
        assert chromeResourceDropdown.is_displayed()
        fireFoxResourceDropdown = self.fireFoxDriver.find_element(By.ID, "resource-dropdown")
        assert fireFoxResourceDropdown.is_displayed()

   def test_footer_is_in_document(self):
        edgeFooter = self.edgeDriver.find_element(By.ID, "footer")
        assert edgeFooter.is_displayed()
        chromeFooter = self.chromeDriver.find_element(By.ID, "footer")
        assert chromeFooter.is_displayed()
        fireFoxFooter = self.fireFoxDriver.find_element(By.ID, "footer")
        assert fireFoxFooter.is_displayed()    

   def test_navbar_is_in_document(self):
        edgeNavbar = self.edgeDriver.find_element(By.ID, "navbar")
        assert edgeNavbar.is_displayed()
        chromeNavbar = self.chromeDriver.find_element(By.ID, "navbar")
        assert chromeNavbar.is_displayed()    
        fireFoxNavbar = self.fireFoxDriver.find_element(By.ID, "navbar")
        assert fireFoxNavbar.is_displayed()

   def test_jumbotron_is_in_document(self):
        edgeJumbotron = self.edgeDriver.find_element(By.ID, "jumbotron")
        assert edgeJumbotron.is_displayed()
        chromeJumbotron = self.chromeDriver.find_element(By.ID, "jumbotron")
        assert chromeJumbotron.is_displayed()        
        fireFoxJumbotron = self.fireFoxDriver.find_element(By.ID, "jumbotron")
        assert fireFoxJumbotron.is_displayed()    

   def test_product_features_is_in_document(self):
        edgeProductFeatures = self.edgeDriver.find_element(By.ID, "productFeatures")
        assert edgeProductFeatures.is_displayed()
        chromeProductFeatures = self.chromeDriver.find_element(By.ID, "productFeatures")
        assert chromeProductFeatures.is_displayed()
        fireFoxProductFeatures = self.fireFoxDriver.find_element(By.ID, "productFeatures")
        assert fireFoxProductFeatures.is_displayed()

   def test_partners_is_in_document(self):
        edgePartners = self.edgeDriver.find_element(By.ID, "partners")
        assert edgePartners.is_displayed()
        chromePartners = self.chromeDriver.find_element(By.ID, "partners")
        assert chromePartners.is_displayed()
        fireFoxPartners = self.fireFoxDriver.find_element(By.ID, "partners")
        assert fireFoxPartners.is_displayed()

   def test_copyright_is_in_document(self):
        edgeCopyright = self.edgeDriver.find_element(By.ID, "copyright")
        assert edgeCopyright.is_displayed()
        chromeCopyright = self.chromeDriver.find_element(By.ID, "copyright")
        assert chromeCopyright.is_displayed()
        fireFoxCopyright = self.fireFoxDriver.find_element(By.ID, "copyright")
        assert fireFoxCopyright.is_displayed()

   def tearDown(self):
        self.edgeDriver.close()
        self.chromeDriver.close()
        self.fireFoxDriver.close()

if __name__ == "__main__":
    unittest.main(warnings='ignore')  