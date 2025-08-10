import qrcode

# Replace this URL with your landing page URL
IMAGE_PATH = "./barcode"

"""
# Google Restaurant HCM District1 Ngon
url = "https://www.google.com/search?gs_ssp=eJzj4tZP1zcsqawqzzCzNGC0UjWoMDY0NzVKM7FIsbBINk5JNLYyqEhKMUgyS01NMrAwTTY1MUr24s9Lz89TKEotLkksLUrMKwEAuqsVPQ&q=ngon+restaurant&rlz=1C1YTUH_en-GBAU1071AU1071&oq=ngon+res&gs_lcrp=EgZjaHJvbWUqFQgBEC4YJxivARjHARiABBiKBRiOBTIGCAAQRRg5MhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBwgCEAAYgAQyDQgDEC4YrwEYxwEYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgATSAQg0NTg5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x31752f48d88c3da3:0xbd0b6eeb085c542c,3,,,,"
IMAGE_NAME = "Google_Restaurant_HCM_District1_Ngon.png"
"""

# Facebook Restaurant HCM District1 Ngon
url = "https://www.facebook.com/Nhahang.QuanAnNgon/reviews"
IMAGE_NAME = "Facebook_Restaurant_HCM_District1_Ngon.png"


# Create QR code
qr = qrcode.QRCode(
    version=1,  # Controls the size of the QR code (1 = small, 40 = large)
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,  # Size of each box in pixels
    border=4,  # Border thickness (default 4)
)

qr.add_data(url)
qr.make(fit=True)

# Create image
img = qr.make_image(fill_color="black", back_color="white")

# Save image
img.save(IMAGE_PATH + "/" + IMAGE_NAME)

print("QR Code saved")
