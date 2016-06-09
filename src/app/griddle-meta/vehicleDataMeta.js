//Griddle Custom Components
import GriddleResponsiveHeader from '../components/griddle-responsive-header';
import GriddleCell from '../components/griddle-cell';
import GriddleAvatar from '../components/griddle-avatar';
import GriddleCustomHeader from '../components/griddle-custom-header';

module.exports = {
  columnMeta: [
    {
      "columnName": "Make",
      "order": 0,
      "sortable": true,
      "locked": false,
      "visible": true,
      "customComponent": GriddleResponsiveHeader,
      "responsiveHeaderProps": {"right": "Model"},
      "displayName": "Make",
      "customHeaderComponent": GriddleCustomHeader,
      "customHeaderComponentProps": {"sortable": true}
    },
    {
      "columnName": "id",
      "order": 1,
      "sortable": true,
      "locked": false,
      "visible": false,
      "customComponent": GriddleCell,
      "displayName": "ID",
      "customHeaderComponent": GriddleCustomHeader,
      "customHeaderComponentProps": {"sortable": true}
    },
    {
      "columnName": "Model",
      "order": 2,
      "sortable": true,
      "locked": false,
      "visible": true,
      "customComponent": GriddleCell,
      "displayName": "Model",
      "cssClassName": "griddle__responsive-hide",
      "customHeaderComponent": GriddleCustomHeader,
      "customHeaderComponentProps": {"sortable": true}
    },
    {
      "columnName": "Year",
      "order": 3,
      "sortable": true,
      "locked": false,
      "visible": true,
      "customComponent": GriddleCell,
      "displayName": "Year",
      "customHeaderComponent": GriddleCustomHeader,
      "customHeaderComponentProps": {"sortable": true}
    },
    {
      "columnName": "Image",
      "order": 4,
      "sortable": true,
      "locked": false,
      "visible": true,
      "customComponent": GriddleAvatar,
      "displayName": "Image",
      "customHeaderComponent": GriddleCustomHeader,
      "customHeaderComponentProps": {"sortable": false}
    },
    {
      "columnName": "Price",
      "order": 5,
      "sortable": true,
      "locked": false,
      "visible": true,
      "customComponent": GriddleCell,
      "displayName": "Price",
      "customHeaderComponent": GriddleCustomHeader,
      "customHeaderComponentProps": {"sortable": true}
    }
  ]
};
