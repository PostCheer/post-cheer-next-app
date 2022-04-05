## Post Cheer Work Log ##
* **04/05/2022** - Working on gremlin graph quick start tutorial, encountering ssl.SSLCertificationError, and it only works with python 3.9 for some reason \n
Traceback (most recent call last):
  File "/Users/samuelhenderson/Desktop/git-samples/azure-cosmos-db-graph-python-getting-started/connect.py", line 165, in <module>
    cleanup_graph(client)
  File "/Users/samuelhenderson/Desktop/git-samples/azure-cosmos-db-graph-python-getting-started/connect.py", line 58, in cleanup_graph
    callback = client.submitAsync(_gremlin_cleanup_graph)
  File "/Library/Frameworks/Python.framework/Versions/3.9/lib/python3.9/site-packages/gremlin_python/driver/client.py", line 151, in submitAsync
    return conn.write(message)
  File "/Library/Frameworks/Python.framework/Versions/3.9/lib/python3.9/site-packages/gremlin_python/driver/connection.py", line 55, in write
    self.connect()
  File "/Library/Frameworks/Python.framework/Versions/3.9/lib/python3.9/site-packages/gremlin_python/driver/connection.py", line 45, in connect
    self._transport.connect(self._url, self._headers)
  File "/Library/Frameworks/Python.framework/Versions/3.9/lib/python3.9/site-packages/gremlin_python/driver/tornado/transport.py", line 45, in connect
    self._ws = self._loop.run_sync(
  File "/Library/Frameworks/Python.framework/Versions/3.9/lib/python3.9/site-packages/tornado/ioloop.py", line 576, in run_sync
    return future_cell[0].result()
  File "/Library/Frameworks/Python.framework/Versions/3.9/lib/python3.9/site-packages/tornado/simple_httpclient.py", line 269, in run
    stream = yield self.tcp_client.connect(
  File "/Library/Frameworks/Python.framework/Versions/3.9/lib/python3.9/site-packages/tornado/gen.py", line 1133, in run
    value = future.result()
  File "/Library/Frameworks/Python.framework/Versions/3.9/lib/python3.9/site-packages/tornado/gen.py", line 1141, in run
    yielded = self.gen.throw(*exc_info)
  File "/Library/Frameworks/Python.framework/Versions/3.9/lib/python3.9/site-packages/tornado/tcpclient.py", line 241, in connect
    stream = yield stream.start_tls(False, ssl_options=ssl_options,
  File "/Library/Frameworks/Python.framework/Versions/3.9/lib/python3.9/site-packages/tornado/gen.py", line 1133, in run
    value = future.result()
  File "/Library/Frameworks/Python.framework/Versions/3.9/lib/python3.9/site-packages/tornado/iostream.py", line 1501, in _do_ssl_handshake
    self.socket.do_handshake()
  File "/Library/Frameworks/Python.framework/Versions/3.9/lib/python3.9/ssl.py", line 1309, in do_handshake
    self._sslobj.do_handshake()
ssl.SSLCertVerificationError: [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1122)

* **04/04/2022** - Read through: https://docs.microsoft.com/en-us/azure/cosmos-db/graph/graph-introduction
* **04/03/2022** - Read about AWS Lambda and do hello world tutorial. Start documenting work in README.md
* **04/02/2022** - Finish applying AWS Activate and Microsoft for Startups
* **04/01/2022** - Start apply to AWS Activate and Microsoft for Startups, edited about us section, fix postcards spelling, and add in construction
* **03/31/2022** - Finish customizing page and came up with good mission statement.
* **03/30/2022** - Add custom domain to AWS Amplify, and edit apge with brief description, about us, and contact us.
* **03/29/2022** - Inital commit of next.js front end
