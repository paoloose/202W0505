import { globalStyle, style } from '@vanilla-extract/css';

export const enterpriseListStyles = style({
    borderCollapse: 'collapse',
    width: '100%',
    backgroundColor: '#d2cfc7',
    display: 'flex',
    flexDirection: 'column',
});

export const enterpriseListHeader = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
});

export const enterpriseListInput = style({
    height: 24,
    borderRight: '2px solid #e0ddd9',
    borderBottom: '2px solid #e0ddd9',
    outline: '1px solid #d1cec6',
    borderTop: '2px solid #4f4f4f',
    borderLeft: '2px solid #4f4f4f',
});

export const enterpriseListButton = style({
    display: 'table-cell',
    backgroundColor: '#d2cfc7',
    height: '100%',
    borderLeft: '2px solid #fff',
    borderTop: '2px solid #fff',
    borderBottom: '2.2px solid #4f4f4f',
    borderRight: '2.2px solid #4f4f4f',
    verticalAlign: 'middle',
    fontFamily: 'serif',
    fontSize: 14,
    ":hover": {
        backgroundColor: '#c4c2b9',
        cursor: 'pointer',
    },
    ":active": {
        backgroundColor: '#bdbbb3',
        cursor: 'grabbing',
    },
});

export const enterpriseListTable = style({
    borderCollapse: 'collapse',
    borderSpacing: 0,
    width: '100%',
});

export const enterpriseListTableHeader = style({
    borderRight: '2px solid #565656',
    borderBottom: '2px solid #565656',
    fontSize: 14,
    padding: 4,
    position: 'relative',
    ':before': {
        borderTop: '2px solid #fff',
        borderLeft: '2px solid #fff',
        content: '',
        display: 'block',
        position: 'absolute',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
    }
});

export const enterpriseListTableCell = style({
    borderRight: '2px solid #b0b0b0',
    borderBottom: '2px solid #b0b0b0',
    fontSize: 14,
    padding: 4,
    backgroundColor: '#fff',
    position: 'relative',
    ':before': {
        borderTop: '2px solid #fff',
        borderLeft: '2px solid #fff',
        content: '',
        display: 'block',
        position: 'absolute',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
    }
});

globalStyle('legend', {
    color: '#0707f7',
    fontWeight: 600,
})

globalStyle('fieldset', {
    borderColor: '#f2f2f1',
    borderWidth: 3,
})
