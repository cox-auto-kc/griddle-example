//Griddle Custom Components

import GriddleResponsiveHeader from '../components/griddle-responsive-header';
import GriddleCell from '../components/griddle-cell';
import GriddleAvatar from '../components/griddle-avatar';
import GriddleNameLink from '../components/griddle-name-link';
import GriddleCustomHeader from '../components/griddle-custom-header';
import GriddleCustomPager from '../components/griddle-custom-pager';


module.exports = {
  columnMeta: [
    {
      "columnName": "id",
      "order": 1,
      "sortable": true,
      "locked": false,
      "visible": false,
      "customComponent": GriddleResponsiveHeader,
      "responsiveHeaderProps": {"right": "name"},
      "displayName": "ID",
      "customHeaderComponent": GriddleCustomHeader,
      "cssClassName": "griddle__column--id"
    },
    {
      "columnName": "domain",
      "order": 2,
      "locked": false,
      "visible": false,
      "customComponent": GriddleAvatar,
      "sortable": false,
      "displayName": "Domain",
      "customHeaderComponent": GriddleCustomHeader,
      "cssClassName": "griddle__column--avatar"
    },
    {
      "columnName": "subreddit_id",
      "order": 3,
      "locked": false,
      "visible": false,
      "customComponent": GriddleNameLink,
      "customComponentLinkSrc": "link",
      "displayName": "Sub-Reddit ID",
      "customHeaderComponent": GriddleCustomHeader,
      "cssClassName": "griddle__column--name"
    },
    {
      "columnName": "downs",
      "order": 4,
      "locked": false,
      "visible": false,
      "customComponent": GriddleCell,
      "displayName": "Down Votes",
      "customHeaderComponent": GriddleCustomHeader,
      "cssClassName": "griddle__column--age"
    },
    {
      "columnName": "ups",
      "order": 5,
      "locked": false,
      "visible": false,
      "customComponent": GriddleCell,
      "displayName": "Ups",
      "customHeaderComponent": GriddleCustomHeader,
      "cssClassName": "griddle__column--trade"
    },
    {
      "columnName": "author",
      "order": 6,
      "locked": false,
      "visible": true,
      "customComponent": GriddleCell,
      "sortable": false,
      "displayName": "Author",
      "customHeaderComponent": GriddleCustomHeader,
      "cssClassName": "griddle__column--known"
    },
    {
      "columnName": "created",
      "order": 7,
      "locked": false,
      "visible": false,
      "customComponent": GriddleCell,
      "displayName": "Created",
      "customHeaderComponent": GriddleCustomHeader,
      "cssClassName": "griddle__column--last-ref"
    },
    {
      "columnName": "created_utc",
      "order": 8,
      "locked": false,
      "visible": true,
      "customComponent": GriddleCell,
      "displayName": "Created UTC",
      "customHeaderComponent": GriddleCustomHeader,
      "cssClassName": "griddle__column--last-ref"
    },
    {
      "columnName": "subreddit",
      "order": 9,
      "locked": false,
      "visible": true,
      "customComponent": GriddleCell,
      "displayName": "SubReddit",
      "customHeaderComponent": GriddleCustomHeader,
      "cssClassName": "griddle__column--last-ref"
    },
    {
      "columnName": "gilded",
      "order": 10,
      "locked": false,
      "visible": false,
      "customComponent": GriddleCell,
      "displayName": "Gilded",
      "customHeaderComponent": GriddleCustomHeader,
      "cssClassName": "griddle__column--last-ref"
    },
    {
      "columnName": "url",
      "order": 11,
      "locked": false,
      "visible": true,
      "customComponent": GriddleCell,
      "displayName": "URL",
      "customHeaderComponent": GriddleCustomHeader,
      "cssClassName": "griddle__column--last-ref"
    },
    {
      "columnName": "selftext_html",
      "order": 12,
      "locked": false,
      "visible": false,
      "customComponent": GriddleCell,
      "displayName": "SelfText HTML",
      "customHeaderComponent": GriddleCustomHeader,
      "cssClassName": "griddle__column--last-ref"
    },
    {
      "columnName": "score",
      "order": 13,
      "locked": false,
      "visible": true,
      "customComponent": GriddleCell,
      "displayName": "Score",
      "customHeaderComponent": GriddleCustomHeader,
      "cssClassName": "griddle__column--last-ref"
    },
    {
      "columnName": "num_comments",
      "order": 14,
      "locked": false,
      "visible": true,
      "customComponent": GriddleCell,
      "displayName": "Number of Comments",
      "customHeaderComponent": GriddleCustomHeader,
      "cssClassName": "griddle__column--last-ref"
    },
    {
      "columnName": "permalink",
      "order": 15,
      "locked": false,
      "visible": false,
      "customComponent": GriddleCell,
      "displayName": "Permalink",
      "customHeaderComponent": GriddleCustomHeader,
      "cssClassName": "griddle__column--last-ref"
    },
    {
      "columnName": "selftext",
      "order": 16,
      "locked": false,
      "visible": true,
      "customComponent": GriddleCell,
      "displayName": "SelfText",
      "customHeaderComponent": GriddleCustomHeader,
      "cssClassName": "griddle__column--last-ref"
    },
    {
      "columnName": "thumbnail",
      "order": 17,
      "locked": false,
      "visible": true,
      "customComponent": GriddleAvatar,
      "displayName": "Thumbnail",
      "customHeaderComponent": GriddleCustomHeader,
      "cssClassName": "griddle__column--last-ref"
    }
  ]
};
