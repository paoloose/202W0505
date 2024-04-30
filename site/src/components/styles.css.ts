import { globalStyle, style } from '@vanilla-extract/css';

export const enterpriseListStyles = style({
    borderCollapse: 'collapse',
    width: '100%',
    backgroundColor: '#d2cfc7',
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
    borderLeft: '2px solid #eae3ea',
    borderTop: '2px solid #eae3ea',
    borderRight: '1px solid #000000',
    borderBottom: '1px solid #000000',
});

export const enterpriseListHeader = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    '@media': {
        '(max-width: 600px)': {
            display: 'block',
        }
    }
});

export const enterpriseListInputsWrapper = style({
    display: 'grid',
    gridTemplateColumns: 'max-content max-content',
    gap: 5,
    '@media': {
        '(max-width: 500px)': {
            gridTemplateColumns: '1fr',
        }
    }
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
    width: 'min-intrinsic',
    backgroundColor: '#d2cfc7',
    borderLeft: '2px solid #fff',
    borderTop: '2px solid #fff',
    borderBottom: '2.2px solid #4f4f4f',
    borderRight: '2.2px solid #4f4f4f',
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

export const enterpriseListWindowButton = style({
    display: 'table-cell',
    borderLeft: '1.5px solid #fff',
    borderTop: '1.5px solid #fff',
    borderBottom: '1.5px solid #4f4f4f',
    borderRight: '1.5px solid #4f4f4f',
    verticalAlign: 'middle',
    height: 18,
    width: 18,
    padding: 0,
    marginRight: 3,
    ":hover": {
        opacity: 0.9,
        cursor: 'pointer',
    },
    ":active": {
        cursor: 'grabbing',
    },
});

export const enterpriseListTableWrapper = style({
    minHeight: 200,
    margin: 4,
    overflow: 'auto',
    borderLeft: '2px solid #8a8885',
    borderTop: '2px solid #8a8885',
    borderRight: '2px solid #fcfcfc',
    borderBottom: '2px solid #fcfcfc',
})

export const enterpriseListTable = style({
    borderCollapse: 'collapse',
    overflow: 'auto',
    borderSpacing: 0,
    width: '100%',
});

export const enterpriseListTableHeader = style({
    borderRight: '2px solid #565656',
    borderBottom: '2px solid #565656',
    fontSize: 14,
    padding: 4,
    userSelect: 'text',
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
    userSelect: 'text',
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
