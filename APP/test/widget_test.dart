
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class HomePageWidget extends StatefulWidget {
  const HomePageWidget({super.key});
  
  static String routeName = 'HomePage';
  static String routePath = '/homePage';

  @override
  State<HomePageWidget> createState() => _HomePageWidgetState();
}

class _HomePageWidgetState extends State<HomePageWidget> {
  late final WebViewController _webViewController;

  @override
  void initState() {
    super.initState();
    
    // Initialize the WebView controller
    _webViewController = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..loadRequest(Uri.parse('https://jeevan-aahar.vercel.app'));
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        FocusScope.of(context).unfocus();
        FocusManager.instance.primaryFocus?.unfocus();
      },
      child: Scaffold(
        backgroundColor: Colors.grey[50], // Light background color
        appBar: AppBar(
          backgroundColor: const Color(0xFF0CCF9C),
          automaticallyImplyLeading: false,
          title: const Center(
            child: Text(
              'Jeevan Aahaar',
              textAlign: TextAlign.center,
              style: TextStyle(
                color: Colors.white,
                fontSize: 22,
                fontWeight: FontWeight.w500,
              ),
            ),
          ),
          elevation: 2,
        ),
        body: SafeArea(
          child: Column(
            children: [
              Expanded(
                child: WebViewWidget(
                  controller: _webViewController,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}