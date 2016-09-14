//Griddle Custom Components
import GriddleResponsiveHeader from '../components/griddle-responsive-header';
import GriddleCell from '../components/griddle-cell';
import GriddleCustomHeader from '../components/griddle-custom-header';

module.exports = {
  columnMeta: [
    {
      "columnName": "name",
      "order": 0,
      "sortable": true,
      "locked": false,
      "visible": true,
      "responsiveHeaderProps": {"right": "Model"},
      "displayName": "Name",
    },
    {
      "columnName": "model",
      "order": 1,
      "sortable": true,
      "locked": false,
      "visible": true,
      "displayName": "Model"
    },
    {
      "columnName": "manufacturer",
      "order": 2,
      "sortable": true,
      "locked": false,
      "visible": true,
      "displayName": "Manufacturer",
      "cssClassName": "griddle__responsive-hide"
    },
    {
      "columnName": "passengers",
      "order": 3,
      "sortable": true,
      "locked": false,
      "visible": true,
      "displayName": "Passengers"
    },
    {
      "columnName": "cost_in_credits",
      "order": 4,
      "sortable": false,
      "locked": false,
      "visible": true,
      "displayName": "Credits",
    },
    {
      "columnName": "length",
      "order": 5,
      "sortable": false,
      "locked": false,
      "visible": false,
      "displayName": "Length",
    },
    {
      "columnName": "max_atmosphering_speed",
      "order": 6,
      "sortable": false,
      "locked": false,
      "visible": false,
      "displayName": "Max Speed",
    },
    {
      "columnName": "crew",
      "order": 7,
      "sortable": false,
      "locked": false,
      "visible": false,
      "displayName": "Crew",
    },
    {
      "columnName": "cargo_capacity",
      "order": 8,
      "sortable": false,
      "locked": false,
      "visible": false,
      "displayName": "Cargo Capacity",
    },
    {
      "columnName": "consumables",
      "order": 9,
      "sortable": false,
      "locked": false,
      "visible": false,
      "displayName": "Consubables",
    },
    {
      "columnName": "hyperdrive_rating",
      "order": 10,
      "sortable": false,
      "locked": false,
      "visible": true,
      "displayName": "Hyperdrive Rating",
    },
    {
      "columnName": "MGLT",
      "order": 11,
      "sortable": false,
      "locked": false,
      "visible": true,
      "displayName": "MGLT",
    },
    {
      "columnName": "starship_class",
      "order": 12,
      "sortable": false,
      "locked": false,
      "visible": false,
      "displayName": "Starship Class",
    },
    {
      "columnName": "pilots",
      "order": 13,
      "sortable": false,
      "locked": false,
      "visible": false,
      "displayName": "Pilots",
    },
    {
      "columnName": "films",
      "order": 14,
      "sortable": false,
      "locked": false,
      "visible": false,
      "displayName": "Films",
    },
    {
      "columnName": "created",
      "order": 15,
      "sortable": false,
      "locked": false,
      "visible": false,
      "displayName": "Createdw",
    },
    {
      "columnName": "edited",
      "order": 16,
      "sortable": false,
      "locked": false,
      "visible": false,
      "displayName": "Edited",
    },
    {
      "columnName": "url",
      "order": 17,
      "sortable": false,
      "locked": false,
      "visible": false,
      "displayName": "URL",
    }
  ]
};
