# Access data

If you feel as lost as we did for accessing data, this wiki entry will be for you!

## Data levels

Firstly, it is important to understand the different levels of data which we can work with. A full description can be found [here](https://www.earthdata.nasa.gov/engage/open-data-services-and-software/data-information-policy/data-levels), but as a summary:

* Level 0: This is the most basic data from the spacecraft, at full resolution. It is unprocessed from the spacecraft.
* Level 1: Processing is included to label the data.
* Level 2: Geophysical variables are derived at the same resolution as the L1 data.
* Level 3: Variables are included on maps and can be averaged out over time periods.
* Level 4: Variables are derived from multiple data streams including other L1 data.

## Monitoring Algal Blooms

Monitoring algal blooms is something more easily done from space, given there is standardised data covering a wide area at regular periods over a long period of time. We can also look at related data at the same places, to understand ecological dynamics, the impact of climate change on marine ecosystems, and whether algae growth can be an indicator of larger-scale climate events. For our study, we focused on the following satellites:
* Landsat
* Sentinel-2
* MODIS

### Landsat
Landsat satellites have been providing detailed images of the Earth's surface since the 1970s. Their long-term data archive is highly valuable for studying temporal patterns of algal blooms. Landsat data typically has a spatial resolution ranging from 15 to 100 metres, depending on the sensor. This makes it ideal for studying larger water bodies but less suitable for small-scale features. Landsat 8 offers the highest resolution imagery, with data going back to 2013.

### Sentinel-2
The Sentinel-2 mission provides high-resolution optical imagery with a spatial resolution as fine as 10 metres. It has 13 spectral bands, including those sensitive to chlorophyll concentrations, which is essential for algae monitoring. The relatively short revisit time (5 days with two satellites in operation) allows for more frequent monitoring, enabling researchers to capture short-term variations in algal blooms.

### MODIS
MODIS (Moderate Resolution Imaging Spectroradiometer) provides a unique blend of high temporal resolution and broad spatial coverage, with resolutions ranging from 250 metres to 1 kilometer. It captures data in 36 spectral bands, including those suitable for studying sea surface temperature and chlorophyll concentrations. This makes MODIS ideal for large-scale, long-term studies of algae distribution patterns and their correlation with environmental factors.

### Our use of this data
Landsat, Sentinel-2, and MODIS offer complementary advantages for monitoring algal blooms. Landsat's extensive historical archive is invaluable for long-term studies, Sentinel-2 provides the spatial detail needed for more localised investigations, and MODIS is unbeatable for observing large-scale trends over short time periods.

### MODIS Level-3 Data Products
#### Ocean Temperature Maps
Ocean temperature plays a crucial role in the growth and spread of algae. Warmer waters can facilitate the rapid multiplication of algae, leading to blooms that could potentially become harmful.

The MODIS Ocean Temperature Maps provide sea surface temperature measurements on various temporal scales (daily, weekly, monthly, etc.) and spatial scales (down to 1 km resolution). These data are critical for understanding how temperature variations contribute to algae dynamics and can be used in conjunction with other parameters to model and predict algal blooms.

#### Ocean Chlorophyll Maps
Chlorophyll is the pigment responsible for the green colour in algae, and its concentration in the ocean serves as a direct indicator of algal presence. Higher levels of chlorophyll usually correspond to increased algal activity, making this data vital for identifying and monitoring blooms.

MODIS Ocean Chlorophyll Maps offer measurements of chlorophyll-a concentration at the ocean's surface. These are generally available on various temporal scales (daily, weekly, monthly, etc.) and spatial resolutions (usually 4 km). The data are often colour-coded, making it easy to identify areas of high algal concentration.

#### Techniques
The easiest way we have found to interact with this data is to request a list of download URLs from NASA's Ocean Color website (oceancolor.gsfc.nasa.gov), and then batch-process these in Python.

### Other data access: via Planetary Computer Hub
* For remote sensing data, there is a cool new tool from Microsoft which lets you access all sorts of remote sensing data.
* You have to request access, but currently (Dec 2023), it is free and we had no problems with getting access.

## Planetary science

We focused on the following spaceprobes
* Cassini

### Data access

#### via NASA pds imaging server
* https://pds-imaging.jpl.nasa.gov/portal/



### Use case: VIMS from Cassini

#### Step 1: access data "raw cube data"
* We tried the VIMS before (an imaging instrument from Cassini) 
* https://pds-imaging.jpl.nasa.gov/volumes/vims.html

#### Step 2: open cub files
* Using the Integrated Software for Imagers and Spectrometers v3
* Looks very dodgy from the start, but it surprisingly works.
* It is a digital image processing software package to manipulate imagery collected by current and past NASA and International planetary missions. 
* Access it here: https://github.com/DOI-USGS/ISIS3

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
