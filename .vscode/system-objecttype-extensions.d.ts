
import EnumValue = require('dw/value/EnumValue')
import MarkupText = require('dw/content/MarkupText');
import MediaFile = require('dw/content/MediaFile');

// autogeneratedfile - 'd:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml'
declare global {
    module ICustomAttributes {

		interface Basket {
			/**
			* Session Address Book
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#181) 
			*/
			sessionAddressBook: string | null;

		}
		interface BonusDiscountLineItem {
			/**
			* Bonus Product Line Item UUID

				This represents the UUID of the product line item that holds the qualifying product.
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#205) 
			*/
			bonusProductLineItemUUID: string | null;

		}
		interface Category {
			/**
			* Alternative URL

				Renders an alternative URL in main navigation. Uses Commerce Cloud content url notation. For example: $url('Account-Show')$ or normal URL http://xchange.demandware.com
			* @group customAttributes - Custom
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#407) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#537)
			*/
			alternativeUrl: MarkupText | null;

			/**
			* Category Banner ID

				Used to define the content asset used to populate a grid page banner for a category. This value is applied to all sub-category navigation (cascading) if no specific catBannerID has been defined for  a sub-category.
			* @group customAttributes - Custom
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#417) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#534)
			*/
			catBannerID: string | null;

			/**
			* Custom CSS File

				Use this attribute to apply custom styles for this category.
			* @group Presentation - Presentation Attributes
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#426) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#518)
			*/
			customCSSFile: MediaFile | null;

			/**
			* Enable Compare

				Used to define if/when the Compare feature is to be visualized in the storefront based on navigation. If enableCompare = FALSE, no Compare checkboxes will be displayed in the grid view. If enableCompare = TRUE, the category (and its children) will support the Compare feature.
			* @group customAttributes - Custom
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#434) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#533)
			*/
			enableCompare: boolean | null;

			/**
			* Header Menu Banner
			* @group customAttributes - Custom
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#441) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#536)
			*/
			headerMenuBanner: MarkupText | null;

			/**
			* Header Menu Orientation

				Which way to orient the menu and optional header menu HTML. Vertical will list all in one line. Horizontal will list in columns.
			* @group customAttributes - Custom
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#448) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#535)
			*/
			headerMenuOrientation: EnumValue<'Horizontal' | 'Vertical' | null> 

			/**
			* Show in Menu Navigation

				Used to indicate that a category (such as Mens -> Footwear -> Boots) will display in the roll-over navigation. A sub-category only shows if also the parent category is marked as showInMenu. Up to three category levels are shown in roll-over navigation.
			* @group customAttributes - Custom
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#466) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#532)
			*/
			showInMenu: boolean | null;

			/**
			* Size Chart

				Used to define the content asset ID of the Size Chart that is appropriate for products whose PRIMARY category is the associated category (and its children). Whenever a product detail page (or quick view) is rendered, the Size Chart link is populated based on the value of this attribute for the products primary categorization. If not defined, NO size chart link is displayed.
			* @group customAttributes - Custom
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#473) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#531)
			*/
			sizeChartID: string | null;

			/**
			* Slot Banner HTML
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#482) 
			*/
			slotBannerHtml: MarkupText | null;

			/**
			* Category Landing Slot Image

				Image used on either the top or bottom slot on the category landing pages.
			* @group Presentation - Presentation Attributes
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#489) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#517)
			*/
			slotBannerImage: MediaFile | null;

		}
		interface Content {
			/**
			* Year
			* @group Content - Content
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#668) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#725)
			*/
			Year: string | null;

			/**
			* Body
			* @group Content - Content
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#677) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#724)
			*/
			body: MarkupText | null;

			/**
			* Custom CSS File

				Use this attribute to apply custom styles for this content asset.
			* @group Presentation - Presentation
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#685) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#720)
			*/
			customCSSFile: MediaFile | null;

		}
		interface CustomerActiveData {
			/**
			* Returned items

				The number of items returned by this customer
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#810) 
			*/
			returnItems: number | null;

		}
		interface Folder {
			/**
			* Custom CSS File

				Use this attribute to apply custom styles for this category.
			* @group Presentation - Presentation
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#1124) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#1157)
			*/
			customCSSFile: MediaFile | null;

		}
		interface PaymentTransaction {
			/**
			* eFunds Transaction History
			* @group Custom - Custom
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#1898) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#1908)
			*/
			eFundsTransactionHistory: ReadonlyArray<string> 

		}
		interface Product {
			/**
			* Available for In Store Pickup

				Signals if there are inventory lists for brick-and-mortar stores associated with this product.
			* @group inStorePickup - In Store Pickup
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2270) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3648)
			*/
			availableForInStorePickup: boolean | null;

			/**
			* Battery Life
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2281) 
			*/
			batteryLife: string | null;

			/**
			* Battery Type
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2293) 
			*/
			batteryType: string | null;

			/**
			* Boot Type

				Type of Boot for search refinement.
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2305) 
			*/
			bootType: ReadonlyArray<EnumValue<'0010' | '0020' | '0030' | '0040' | '0050' | '0060' | '0070'>> 

			/**
			* Bottom Type

				Bottom type for search refinement
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2348) 
			*/
			bottomType: ReadonlyArray<EnumValue<'0010' | '0020' | '0030' | '0040' | '0050' | '0060' | '0070' | '0080'>> 

			/**
			* Color

				Product color used for variation attribute
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2395) 
			*/
			color: string | null;

			/**
			* Extended Warranty
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2408) 
			*/
			consoleWarranty: string | null;

			/**
			* Custom CSS File

				Use this attribute to apply custom styles for this product.
			* @group Presentation - Presentation Attributes
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2420) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3616)
			*/
			customCSSFile: MediaFile | null;

			/**
			* Digital Camera Features
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2432) 
			*/
			digitalCameraFeatures: ReadonlyArray<EnumValue<'0010' | '0020' | '0030' | '0040' | '0050' | '0060' | '0070' | '0080' | '0090' | '0100' | '0110' | '0120' | '0130' | '0140' | '0150' | '0160' | '0170' | '0180' | '0190' | '0200' | '0210' | '0220' | '0230' | '0240' | '0250' | '0260' | '0270' | '0280'>> 

			/**
			* Digital Camera Pixels
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2558) 
			*/
			digitalCameraPixels: string | null;

			/**
			* Digital Camera Type
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2570) 
			*/
			digitalCameraType: string | null;

			/**
			* Extended Warranty
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2582) 
			*/
			digitalCameraWarranty: string | null;

			/**
			* Depth
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2594) 
			*/
			dimDepth: string | null;

			/**
			* Height
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2606) 
			*/
			dimHeight: string | null;

			/**
			* Weight
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2618) 
			*/
			dimWeight: string | null;

			/**
			* Width
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2630) 
			*/
			dimWidth: string | null;

			/**
			* Display Size
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2642) 
			*/
			displaySize: string | null;

			/**
			* Genre
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2654) 
			*/
			gameGenre: ReadonlyArray<EnumValue<'Action' | 'Educational' | 'Kids' | 'Racing' | 'Role-Playing' | 'Sports' | 'Strategy'>> 

			/**
			* Game Rating
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2696) 
			*/
			gameRating: string | null;

			/**
			* Gaming System
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2708) 
			*/
			gameSystemType: string | null;

			/**
			* GPS Features
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2720) 
			*/
			gpsFeatures: ReadonlyArray<EnumValue<'0010' | '0020' | '0030' | '0040' | '0050' | '0060' | '0070' | '0080' | '0090' | '0100' | '0110' | '0120' | '0130' | '0140' | '0150' | '0160' | '0170' | '0180' | '0190' | '0200' | '0210' | '0230'>> 

			/**
			* GPS Type
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2822) 
			*/
			gpsType: ReadonlyArray<EnumValue<'0010' | '0020' | '0030' | '0040'>> 

			/**
			* Extended Warranty
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2852) 
			*/
			gpsWarranty: string | null;

			/**
			* Image Aspect Ratio
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2864) 
			*/
			imageAspectRatio: string | null;

			/**
			* New Arrival?
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2876) 
			*/
			isNew: boolean | null;

			/**
			* New Arrival?

				This indiciates if the product is a new arrival.
			* @group searchRefinements - Search Refinements
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2886) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3659)
			*/
			isNewtest: boolean | null;

			/**
			* On sale?

				This is the help text. It is used for sorting rules.
			* @group searchRefinements - Search Refinements
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2897) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3661)
			*/
			isSale: boolean | null;

			/**
			* Age

				Kids Age used for search refinements
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2908) 
			*/
			kidsAge: EnumValue<'0010' | '0020' | '0030' | '0040' | '0050' | '0060' | '0070' | null> 

			/**
			* Length

				This attribute is used for mens and womens pants lengths.
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2950) 
			*/
			length: string | null;

			/**
			* Lens Aperture
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2963) 
			*/
			lensAperture: string | null;

			/**
			* Material
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#2975) 
			*/
			materialTest: ReadonlyArray<EnumValue<'cotton' | 'wool' | 'polyester'>> 

			/**
			* Media Format

				Media Format
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3001) 
			*/
			mediaFormat: ReadonlyArray<EnumValue<'0010' | '0020' | '0030' | '0040' | '0050' | '0060' | '0070' | '0080' | '0090' | '0100'>> 

			/**
			* Memory Size

				Memory Size
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3056) 
			*/
			memorySize: string | null;

			/**
			* Memory Type
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3069) 
			*/
			memoryType: ReadonlyArray<EnumValue<'0010' | '0020' | '0030' | '0040' | '0050' | '0060' | '0070' | '0080' | '0090'>> 

			/**
			* Music Storage
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3119) 
			*/
			musicStorage: string | null;

			/**
			* Optical Zoom
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3131) 
			*/
			opticalZoom: string | null;

			/**
			* Outerwear Type

				Type of Outerwear for search refinement
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3143) 
			*/
			outerwearType: EnumValue<'0010' | '0020' | '0030' | '0040' | '0050' | '0060' | '0070' | '0080' | null> 

			/**
			* Portable Audio Type
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3189) 
			*/
			portableAudioType: ReadonlyArray<EnumValue<'0010' | '0020' | '0030'>> 

			/**
			* Refinement Color
			* @group storefrontAttributes - Storefront Attributes
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3215) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3654)
			*/
			refinementColor: EnumValue<'black' | 'blue' | 'green' | 'red' | 'orange' | 'pink' | 'purple' | 'white' | 'yellow' | 'grey' | 'beige' | 'miscellaneous' | 'brown' | 'navy' | null> 

			/**
			* Resolution
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3284) 
			*/
			resolution: string | null;

			/**
			* Sandal Type

				Type of Sandal for search refinement
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3296) 
			*/
			sandalType: EnumValue<'0010' | '0020' | '0030' | null> 

			/**
			* Sheets

				test attribute
			* @group searchRefinements - Search Refinements
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3322) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3660)
			*/
			sheets: ReadonlyArray<EnumValue<'value1' | 'value2' | 'value3'>> 

			/**
			* Shoe Type

				Type of Shoe for search refinements
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3349) 
			*/
			shoeType: EnumValue<'0010' | '0020' | '0030' | '0040' | '0050' | '0060' | '0070' | '0080' | '0090' | '0100' | '0110' | null> 

			/**
			* Size

				This attribute is used for all footwear, apparel and accessory sizing for men, women and kids products.
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3407) 
			*/
			size: string | null;

			/**
			* Skin Concern
			* @group searchRefinements - Search Refinements
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3420) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3658)
			*/
			skinConcern: ReadonlyArray<EnumValue<'dryTight' | 'comprehensive' | 'liftingLossFirm'>> 

			/**
			* Style Number
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3446) 
			*/
			styleNumber: string | null;

			/**
			* Description
			* @group storefrontAttributes - Storefront Attributes
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3459) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3652)
			*/
			tabDescription: MarkupText | null;

			/**
			* Details
			* @group storefrontAttributes - Storefront Attributes
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3470) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3653)
			*/
			tabDetails: MarkupText | null;

			/**
			* Top Type

				Type of tops in clothing
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3481) 
			*/
			topType: EnumValue<null> 

			/**
			* TV Signal Format
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3493) 
			*/
			tvSignalFormat: string | null;

			/**
			* Size
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3505) 
			*/
			tvSize: string | null;

			/**
			* TV Type
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3517) 
			*/
			tvType: EnumValue<'0010' | '0020' | '0030' | '0040' | null> 

			/**
			* Extended Warranty
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3546) 
			*/
			tvWarranty: string | null;

			/**
			* Video Storage
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3558) 
			*/
			videoStorage: string | null;

			/**
			* Waist

				Attribute used for apparel waist sizing.
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3570) 
			*/
			waist: string | null;

			/**
			* Width

				This attribute is used for shoe widths for mens, womens and kids.
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3583) 
			*/
			width: string | null;

		}
		interface ProductLineItem {
			/**
			* Bonus Product Line Item UUID

				This represents the UUID of the product line item that holds the qualifying product.
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3835) 
			*/
			bonusProductLineItemUUID: string | null;

			/**
			* From Store ID

				Links the store to the product line item for grouping shipments in the checkout process.
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3843) 
			*/
			fromStoreId: string | null;

			/**
			* pre order uuid

				this custom attribute captures the original product line item uuid before it is part of an placed order
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#3851) 
			*/
			preOrderUUID: string | null;

		}
		interface Profile {
			/**
			* Family Status
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4050) 
			*/
			familyStatus: EnumValue<null> 

		}
		interface Shipment {
			/**
			* Pickup Store ID

				Used to map the shipment to a  brick and mortar store.
			* @group storepickup - Store Pickup Information
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4463) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4492)
			*/
			fromStoreId: string | null;

			/**
			* When this attribute equals 'instore', the checkout flow will assign the shipping method (005) which has a no shipping charge.
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4472) 
			*/
			shipmentType: string | null;

			/**
			* Store Pickup Message

				This is text used by the end user when sending a message to the brick and mortar store about the shipment.  This is reflected in the order export.
			* @group storepickup - Store Pickup Information
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4479) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4493)
			*/
			storePickupMessage: string | null;

		}
		interface ShippingMethod {
			/**
			* Estimated Arrival Time

				Estimated days until delivery
			* @group shippingMethodAttr - Shipping Method Attributes
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4531) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4554)
			*/
			estimatedArrivalTime: string | null;

			/**
			* Store Pickup Enabled
			* @group storePickUp - Store Pick Up
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4540) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4550)
			*/
			storePickupEnabled: boolean | null;

		}
		interface SitePreferences {
			/**
			* GoogleVerificationTag - Content Attribute
			* @group Storefront Configs - Storefront Configurations
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4640) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4884)
			*/
			GoogleVerificationTag: string | null;

			/**
			* Check TLS

				When true, this causes a TLS check to take place based on whether or not a cookie ('dw_TLSWarning') has been set on the browser
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4647) 
			*/
			checkTLS: boolean | null;

			/**
			* Default Country Code

				Default country code for store searches
			* @group Storefront Configs - Storefront Configurations
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4655) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4885)
			*/
			countryCode: EnumValue<'US' | 'CA' | null> 

			/**
			* Customer Service Email
			* @group Storefront Configs - Storefront Configurations
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4672) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4886)
			*/
			customerServiceEmail: string | null;

			/**
			* Disable Responsive Design

				Disable Responsive Design for Storefront
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4681) 
			*/
			disableResponsiveDesign: boolean | null;

			/**
			* Enable Infinite Scroll

				This Boolean toggles the option for infinite scrolling or pagination from within the search grid.
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4689) 
			*/
			enableInfiniteScroll: boolean | null;

			/**
			* Enable MultiShipping

				The attribute is used to enable/disable Multi-Shipment Checkout for each site via BM.
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4697) 
			*/
			enableMultiShipping: boolean | null;

			/**
			* Default List Price Book ID
			* @group Storefront Configs - Storefront Configurations
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4705) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4883)
			*/
			listPriceDefault: string | null;

			/**
			* google map api key
			* @group Storefront Configs - Storefront Configurations
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4713) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4887)
			*/
			mapAPI: string | null;

			/**
			* Rate Limiter Threshold

				This number indicates the number of times failures for Logins, GiftCert Balances, and Order Tracking requests will be allowed before displaying a CAPTCHA-style pop-up rate limiter
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4720) 
			*/
			rateLimiterThreshold: number | null;

			/**
			* Slide Slow effect

				Please visit http://jquery.malsup.com/cycle/browser.html for complete visual effects
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4729) 
			*/
			slideshoweffect: EnumValue<'blindX' | 'blindY' | 'blindZ' | 'cover' | 'curtainX' | 'curtainY' | 'fade' | 'fadeZoom' | 'growX' | 'growY' | 'none' | 'scrollUp' | 'scrollDown' | 'scrollLeft' | 'scrollRight' | 'scrollHorz' | 'scrollVert' | 'shuffle' | 'slideX' | 'slideY' | 'toss' | 'turnUp' | 'turnDown' | 'turnLeft' | 'turnRight' | 'uncover' | 'wipe' | 'zoom' | null> 

			/**
			* Store Lookup Max Distance

				Store Lookup Max Distance
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4850) 
			*/
			storeLookupMaxDistance: EnumValue<50 | 75 | 100 | 150 | 200 | null> 

		}
		interface Store {
			/**
			* Country Code Value

				Country Code Value - for the form values
			* @group Address - Address
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#5030) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#5066)
			*/
			countryCodeValue: string | null;

			/**
			* Store Inventory List ID

				Store Inventory List ID
			* @group Inventory - Inventory
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#5039) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#5084)
			*/
			inventoryListId: string | null;

		}
	}
}

declare global {
	interface IGetCustomPreferenceValue {
					/**
			* GoogleVerificationTag - Content Attribute
			* @group Storefront Configs - Storefront Configurations
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4640) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4884)
			*/
			(name: 'GoogleVerificationTag'): string | null;
			
			/**
			* Check TLS

				When true, this causes a TLS check to take place based on whether or not a cookie ('dw_TLSWarning') has been set on the browser
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4647) 
			*/
			(name: 'checkTLS'): boolean | null;
			
			/**
			* Default Country Code

				Default country code for store searches
			* @group Storefront Configs - Storefront Configurations
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4655) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4885)
			*/
			(name: 'countryCode'): EnumValue<'US' | 'CA' | null> 
			
			/**
			* Customer Service Email
			* @group Storefront Configs - Storefront Configurations
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4672) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4886)
			*/
			(name: 'customerServiceEmail'): string | null;
			
			/**
			* Disable Responsive Design

				Disable Responsive Design for Storefront
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4681) 
			*/
			(name: 'disableResponsiveDesign'): boolean | null;
			
			/**
			* Enable Infinite Scroll

				This Boolean toggles the option for infinite scrolling or pagination from within the search grid.
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4689) 
			*/
			(name: 'enableInfiniteScroll'): boolean | null;
			
			/**
			* Enable MultiShipping

				The attribute is used to enable/disable Multi-Shipment Checkout for each site via BM.
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4697) 
			*/
			(name: 'enableMultiShipping'): boolean | null;
			
			/**
			* Default List Price Book ID
			* @group Storefront Configs - Storefront Configurations
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4705) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4883)
			*/
			(name: 'listPriceDefault'): string | null;
			
			/**
			* google map api key
			* @group Storefront Configs - Storefront Configurations
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4713) | [group](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4887)
			*/
			(name: 'mapAPI'): string | null;
			
			/**
			* Rate Limiter Threshold

				This number indicates the number of times failures for Logins, GiftCert Balances, and Order Tracking requests will be allowed before displaying a CAPTCHA-style pop-up rate limiter
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4720) 
			*/
			(name: 'rateLimiterThreshold'): number | null;
			
			/**
			* Slide Slow effect

				Please visit http://jquery.malsup.com/cycle/browser.html for complete visual effects
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4729) 
			*/
			(name: 'slideshoweffect'): EnumValue<'blindX' | 'blindY' | 'blindZ' | 'cover' | 'curtainX' | 'curtainY' | 'fade' | 'fadeZoom' | 'growX' | 'growY' | 'none' | 'scrollUp' | 'scrollDown' | 'scrollLeft' | 'scrollRight' | 'scrollHorz' | 'scrollVert' | 'shuffle' | 'slideX' | 'slideY' | 'toss' | 'turnUp' | 'turnDown' | 'turnLeft' | 'turnRight' | 'uncover' | 'wipe' | 'zoom' | null> 
			
			/**
			* Store Lookup Max Distance

				Store Lookup Max Distance
			* 
			* @source [attribute](file:d:\TryDev\Salesforce Cloud\training-sfcc-sfra-develop\metadata\meta\system-objecttype-extensions.xml#4850) 
			*/
			(name: 'storeLookupMaxDistance'): EnumValue<50 | 75 | 100 | 150 | 200 | null> 
			
	}
}