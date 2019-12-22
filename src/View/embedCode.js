import React from 'react';

export default () => (
  <div style={{ width: '640px', marginTop: '15px' }}>
    <h5>Embed Code</h5>
    <textarea readOnly value={embedCode} className="form-control" style={{ height: '237px', fontSize: '13px' }} />
  </div>
);