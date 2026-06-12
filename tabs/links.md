---
layout: links
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_links

# publish date (used for seo)
# if not specified, site.time will be used.
#date: 2022-03-03 12:32:00 +0000

# for override items in _data/lang/en.yml
#title: My title
#button_name: "My button"
# for override side_and_top_nav_buttons in _data/conf/main.yml
#icon: "fa fa-bath"

# seo
# if not specified, date will be used.
#meta_modify_date: 2022-03-03 12:32:00 +0000
# check the meta_common_description in _data/owner/en.yml
#meta_description: ""

# optional
# please use the "image_viewer_on" below to enable image viewer for individual pages or posts (_posts/ or en/_posts folders).
# image viewer can be enabled or disabled for all posts using the "image_viewer_posts: true" setting in _data/conf/main.yml.
#image_viewer_on: true
# please use the "image_lazy_loader_on" below to enable image lazy loader for individual pages or posts (_posts/ or en/_posts folders).
# image lazy loader can be enabled or disabled for all posts using the "image_lazy_loader_posts: true" setting in _data/conf/main.yml.
#image_lazy_loader_on: true
# exclude from on site search
#on_site_search_exclude: true
# exclude from search engines
#search_engine_exclude: true
# to disable this page, simply set published: false or delete this file
#published: false


# you can always move this content to _data/content/ folder
# just create new file at _data/content/links/en.yml and move content below.
###########################################################
#                Links Page Data
###########################################################
page_data:
  main:
    header: "Links"
    info: "Your Links page description."



  # To change order of the Categories, simply change order. (you don't need to change list order.)
  category:
    - title: "Writing"
      type: id_writing
      color: "gray"
    - title: "Programming"
      type: id_programming
      color: "#F4A273"
    - title: "Social"
      type: id_social
      color: "#62b462"

  list:
    -
    # Programming
    - type: id_programming
      title: "Github"
      url: "https://github.com/Erwan-Martin"
      info: "I present the scripts written during my PhD and afterward"

    # Writing
    - type: id_writing
      title: "Inspiring minds"
      url: "https://ir.lib.uwo.ca/inspiringminds/274/"
      info: "Studying the brain, one neuron at a time"

    # Social
    - type: id_social
      title: "LinkedIn"
      url: "www.linkedin.com/in/erwan-martin019"
      info: "W3Schools offers free online tutorials, references and exercises in all the major languages of the web. Covering popular subjects like HTML, CSS, JavaScript, Python, SQL, Java, and many more."
---
