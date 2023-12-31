# Access data

If you feel as lost as we did for accessing data, this wiki entry will be for you!


## Earth observation / remote sensing

We focused on the following satellites
* Landsat
* Sentinel 2 a/b
* MODIS

### Data access

#### via Ocean Color website
The easiest way we have found to interact with this data is to request a list of download URLs from NASA's Ocean Color website https://oceancolor.gsfc.nasa.gov, and then batch-process these in Python.

#### via Planetary Computer Hub
* For remote sensing data, there is a cool new tool from Microsoft which lets you access all sorts of remote sensing data.
* You have to request access, but currently (Dec 2023), it is free and we had no problems with getting access.


### Use case: L3 chlorophyll and temperature data from MODIS via ocean color

#### Step 1: Website
* use oceancolor: https://oceancolor.gsfc.nasa.gov/l3/
* you need to create an account

#### Step 2: Settings
* Standard
* Aqua-MODIS 
* chlorophyll concentration or SST (11u daytime)
* monthly
* 4km
* 1/1/2021 to 31/12/2022
* click the blue "Extract or Download Data" button

#### Step 3: List of links
* Settings: Type=Binned, Data Retrieval Method=Download
* click green "Download" button
* you will get a list with links like this: https://oceandata.sci.gsfc.nasa.gov/cgi/getfile/AQUA_MODIS.20230801_20230831.L3b.MO.CHL.nc 

#### Step 4: Save files
* Either you write a script or you copy each link into your browser to save the images
* One of the .nc files may have a size of 215MB



## Solar system / remote sensing

We focused on the following spaceprobes
* Cassini

### Data access

#### via NASA pds imaging server
* slides: https://pds-imaging.jpl.nasa.gov/help/How_to_obtain_Cassini_data.pdf
* the data: https://pds-imaging.jpl.nasa.gov/portal/

#### via PILOT
* After selecting a region, you can download a csv file with links of all relevant images.
* A file has e.g. 200kb
* https://pilot.wr.usgs.gov/

### Open cub files

#### via Integrated Software for Imagers and Spectrometers v3
* Using the Integrated Software for Imagers and Spectrometers v3
* Looks very dodgy from the start, but it surprisingly works.
* It is a digital image processing software package to manipulate imagery collected by current and past NASA and International planetary missions. 
* Access it here: https://github.com/DOI-USGS/ISIS3
* open an image https://github.com/DOI-USGS/ISIS3/wiki/Qview_Plot
* documentation: https://github.com/DOI-USGS/ISIS3/wiki/Working_with_Cassini_VIMS
* documentation: https://isis.astrogeology.usgs.gov/7.0.0/index.html
* pyvims: https://vims.univ-nantes.fr/info/isis-calibration

### Use case: VIMS from Cassini

#### Step 1: access data "raw cube data"
* We tried the VIMS before (an imaging instrument from Cassini) 
* https://pds-imaging.jpl.nasa.gov/volumes/vims.html

#### Step 2: open cub files
* use Integrated Software for Imagers and Spectrometers v3

## Medical images

We focus on the following images
* OCT/OCTA
* Fundus
* Cells

### Data access
#### via Grand-Challenge 
* multiple datasets
* https://grand-challenge.org/
#### via IEEE 
* multiple datasets
* https://ieee-dataport.org/datasets
#### via Cellpose
* BLOB image dataset, including cells and other countable objects
* https://www.cellpose.org/dataset
