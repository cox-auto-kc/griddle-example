//Griddle Custom Components

import GriddleResponsiveHeader from '../components/griddle-responsive-header';
import GriddleCell from '../components/griddle-cell';
import GriddleAvatar from '../components/griddle-avatar';
import GriddleNameLink from '../components/griddle-name-link';
import GriddleCustomHeader from '../components/griddle-custom-header';
import GriddleCustomPager from '../components/griddle-custom-pager';
import GriddlePopupText from '../components/griddle-popup-text';

module.exports = {
    columnMeta: [
    {
      "columnName": "id",
      "order": 0,
      "sortable": true,
      "locked": false,
      "visible": true,
      "customComponent": GriddleResponsiveHeader,
      "responsiveHeaderProps": { "right": "author" },
      "displayName": "ID",
      "customHeaderComponent": GriddleCustomHeader,
      "customHeaderComponentProps": { "sortable" : true }
    },
    {
      "columnName": "author",
      "displayName": "Author",
      "order": 1,
      "sortable": true,
      "locked": false,
      "visible": true,
      "customComponent": GriddleNameLink,
      "customComponentLinkSrc": "url",
      "customHeaderComponent": GriddleCustomHeader,
      "customHeaderComponentProps": { "sortable" : true }
    },
    {
      "columnName": "score",
      "displayName": "Score",
      "order": 2,
      "sortable": true,
      "locked": false,
      "visible": true,
      "customComponent": GriddleCell,
      "customHeaderComponent": GriddleCustomHeader,
      "customHeaderComponentProps": { "sortable" : true }
    },
    {
      "columnName": "suggested_sort",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "archived",
      "displayName": "Archived",
      "order": 3,
      "sortable": true,
      "locked": false,
      "visible": true,
      "customComponent": GriddleCell,
      "customHeaderComponent": GriddleCustomHeader,
      "customHeaderComponentProps": { "sortable" : true }
    },
    {
      "columnName": "over_18",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "link_flair_css_class",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "stickied",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "name",
      "displayName": "Name",
      "order": 4,
      "sortable": true,
      "locked": false,
      "visible": true,
      "customComponent": GriddleNameLink,
      "customComponentLinkSrc": "url",
      "customHeaderComponent": GriddleCustomHeader,
      "customHeaderComponentProps": { "sortable" : true }
    },
    {
      "columnName": "mod_reports",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "thumbnail",
      "displayName": "Thumbnails",
      "order": 5,
      "sortable": false,
      "locked": false,
      "visible": true,
      "customComponent": GriddleAvatar,
      "customHeaderComponent": GriddleCustomHeader
    },
    {
      "columnName": "num_comments",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "user_reports",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "clicked",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "hidden",
      "displayName": "Hidden",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "author_flair_css_class",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "from",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "author_flair_text",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "visited",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "created_utc",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "selftext",
      "displayName": "Description",
      "order": 6,
      "sortable": false,
      "locked": false,
      "visible": true,
      "customComponent": GriddlePopupText,
      "customHeaderComponent": GriddleCustomHeader,
      "customHeaderComponentProps": { "sortable" : true }
    },
    {
      "columnName": "secure_media",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "report_reasons",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "preview",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "saved",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "is_self",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "quarantine",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "num_reports",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "subreddit",
      "displayName": "SubReddit",
      "order": 7,
      "sortable": true,
      "locked": false,
      "visible": true,
      "customComponent": GriddleCell,
      "customHeaderComponent": GriddleCustomHeader,
      "customHeaderComponentProps": { "sortable" : true }
    },
    {
      "columnName": "banned_by",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "link_flair_text",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "media",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "hide_score",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "removal_reason",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "from_id",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "title",
      "displayName": "Title",
      "order": 8,
      "sortable": true,
      "locked": false,
      "visible": true,
      "customComponent": GriddleCell,
      "customHeaderComponent": GriddleCustomHeader,
      "customHeaderComponentProps": { "sortable" : true }
    },
    {
      "columnName": "url",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "likes",
      "displayName": "Likes",
      "order": 9,
      "sortable": true,
      "locked": false,
      "visible": true,
      "customComponent": GriddleCell,
      "customHeaderComponent": GriddleCustomHeader,
      "customHeaderComponentProps": { "sortable" : true }
    },
    {
      "columnName": "from_kind",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "approved_by",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "edited",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "post_hint",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "locked",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "distinguished",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "domain",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "selftext_html",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "created",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "subreddit_id",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "gilded",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "permalink",
      "sortable": false,
      "locked": true,
      "visible": false
    },
    {
      "columnName": "downs",
      "displayName": "Down Votes",
      "order": 10,
      "sortable": false,
      "locked": false,
      "visible": true,
      "customComponent": GriddleCell,
      "customHeaderComponent": GriddleCustomHeader,
      "customHeaderComponentProps": { "sortable" : true }
    },
    {
      "columnName": "ups",
      "displayName": "Up Votes",
      "order": 11,
      "sortable": false,
      "locked": false,
      "visible": true,
      "customComponent": GriddleCell,
      "customHeaderComponent": GriddleCustomHeader,
      "customHeaderComponentProps": { "sortable" : true }
    }
  ]
};
