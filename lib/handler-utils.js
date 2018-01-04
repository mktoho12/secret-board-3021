'use strict'

const handleLogout = module.exports.handleLogout = (req, res) => {
  res.writeHead(401, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('ログアウトしました');
}

const handleNotFound = module.exports.handleNotFound = (req, res) => {
  res.writeHead(404, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('ページが見つかりません');
}

const handleBadRequest = module.exports.handleBadRequest = (req, res) => {
  res.writeHead(400, {
    'Content-Type': 'text/plain; charset=utf8'
  });
  res.end('未対応のメソッドです');
}

